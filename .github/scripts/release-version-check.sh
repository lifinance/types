#!/usr/bin/env bash
# Runs in publish.yaml's Release job before `changeset publish`. Refuses a version that
# did not come from a Changesets Version PR, because nothing else blocks a hand-edited
# version from reaching npm `latest`:
#   - a prerelease version (x.y.z-*) must never be published from main;
#   - an unpublished version must have its `## x.y.z` Changesets heading in CHANGELOG.md
#     (a hand-edited version has none).
# A version that is already on npm is fine: `changeset publish` has nothing to do.
set -euo pipefail

name=$(jq -r .name package.json)
version=$(jq -r .version package.json)

if npm view "${name}@${version}" version >/dev/null 2>&1; then
  echo "${name}@${version} is already on npm; nothing to publish."
  exit 0
fi

case "$version" in
  *-*)
    echo "::error::Refusing to publish prerelease ${version} from main. Restore the last released version in package.json."
    exit 1
    ;;
esac

if ! grep -qxF "## ${version}" CHANGELOG.md; then
  echo "::error::${version} has no '## ${version}' entry in CHANGELOG.md, so it did not come from a Changesets Version PR. Revert the manual version change and add a changeset."
  exit 1
fi

echo "Releasing ${name}@${version}."
