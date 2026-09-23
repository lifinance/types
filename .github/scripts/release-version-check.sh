#!/usr/bin/env bash
# Runs first in publish.yaml's Release job and decides whether there is anything to publish.
# Writes `publish=true|false` to $GITHUB_OUTPUT (when set) and fails on a version that did
# not come from a Changesets Version PR — main has no required checks, so a hand-edited
# version can get past version-guard:
#   - a prerelease version (x.y.z-*) must never be published from main;
#   - the commit that last changed `version` must be the Version PR
#     ("chore: version packages" by github-actions[bot]);
#   - the version must have its `## x.y.z` Changesets heading in CHANGELOG.md.
# A version that is already on npm is fine: there is nothing to publish.
set -euo pipefail

output() { if [ -n "${GITHUB_OUTPUT:-}" ]; then echo "publish=$1" >> "$GITHUB_OUTPUT"; fi; }

name=$(jq -r .name package.json)
version=$(jq -r .version package.json)

if view=$(npm view "${name}@${version}" version 2>&1); then
  echo "${name}@${version} is already on npm; nothing to publish."
  output false
  exit 0
elif ! grep -q 'E404' <<< "$view"; then
  echo "::error::Cannot tell whether ${name}@${version} is on npm (the registry did not answer with 404):"
  echo "$view"
  exit 1
fi

case "$version" in
  *-*)
    echo "::error::Refusing to publish prerelease ${version} from main. Restore the last released version in package.json."
    exit 1
    ;;
esac

commit=$(git log -1 --format='%H' -G'"version":' -- package.json)
author=$(git log -1 --format='%an' "$commit")
subject=$(git log -1 --format='%s' "$commit")
if [ "$author" != "github-actions[bot]" ] || [[ "$subject" != "chore: version packages"* ]]; then
  echo "::error::${version} was set by '${subject}' (${author}), not by the Changesets Version PR. Revert the manual version change and add a changeset."
  exit 1
fi

if ! grep -qxF "## ${version}" CHANGELOG.md; then
  echo "::error::${version} has no '## ${version}' entry in CHANGELOG.md, so it did not come from a Changesets Version PR."
  exit 1
fi

echo "Releasing ${name}@${version}."
output true
