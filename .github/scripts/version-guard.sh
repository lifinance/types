#!/usr/bin/env bash
# Fails when the package.json `version` differs from the given base ref.
# Versions change only in the Changesets Version PR (branch changeset-release/*);
# every other PR must carry a changeset instead of editing the version.
set -euo pipefail

base_ref="${1:?usage: version-guard.sh <base-ref>}"
base=$(git show "${base_ref}:package.json" | jq -r .version)
head=$(jq -r .version package.json)

if [ "$base" != "$head" ]; then
  echo "::error::package.json version changed ($base -> $head). Versions change only in the Changesets Version PR. Add a changeset instead (pnpm changeset)."
  exit 1
fi

echo "package.json version unchanged ($head)."
