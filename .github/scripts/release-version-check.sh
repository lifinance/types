#!/usr/bin/env bash
# Runs first in publish.yaml's Release job and decides whether there is anything to publish.
# Writes `publish=true|false` to $GITHUB_OUTPUT (when set) and fails on a version that did
# not come from a Changesets Version PR — main has no required checks, so a hand-edited
# version can get past version-guard:
#   - a prerelease version (x.y.z-*) must never be published from main;
#   - the commit that last changed `version` must be authored by github-actions[bot]
#     (the Version PR, squash- or rebase-merged);
#   - the version must have its `## x.y.z` Changesets heading in CHANGELOG.md.
# A version that is already on npm needs nothing; the script only warns when its vX.Y.Z tag
# is missing (a publish whose tag or GitHub Release step failed).
set -euo pipefail

output() { if [ -n "${GITHUB_OUTPUT:-}" ]; then echo "publish=$1" >> "$GITHUB_OUTPUT"; fi; }

name=$(jq -r .name package.json)
version=$(jq -r .version package.json)

rc=0
bash "$(dirname "$0")/npm-has-version.sh" "${name}@${version}" || rc=$?
case "$rc" in
  0)
    echo "${name}@${version} is already on npm; nothing to publish."
    tag_rc=0
    git ls-remote --exit-code --tags origin "refs/tags/v${version}" > /dev/null 2>&1 || tag_rc=$?
    if [ "$tag_rc" -eq 2 ]; then
      echo "::warning::${name}@${version} is on npm, but the tag v${version} is missing. Create the tag and the GitHub Release by hand (release skill: \"Recovering a release\")."
    fi
    output false
    exit 0
    ;;
  1) ;;
  *)
    echo "::error::Cannot tell whether ${name}@${version} is on npm (the registry did not answer with 404)."
    exit 1
    ;;
esac

case "$version" in
  *-*)
    echo "::error::Refusing to publish prerelease ${version} from main. Restore the last released version in package.json."
    exit 1
    ;;
esac

commit=$(git log -1 --format='%H' -G'"version":' -- package.json)
author=$(git log -1 --format='%an' "$commit")
if [ "$author" != "github-actions[bot]" ]; then
  subject=$(git log -1 --format='%s' "$commit")
  echo "::error::${version} was set by '${subject}' (${author}), not by the Changesets Version PR (github-actions[bot]). Revert the manual version change and add a changeset."
  exit 1
fi

if ! grep -qxF "## ${version}" CHANGELOG.md; then
  echo "::error::${version} has no '## ${version}' entry in CHANGELOG.md, so it did not come from a Changesets Version PR."
  exit 1
fi

echo "Releasing ${name}@${version}."
output true
