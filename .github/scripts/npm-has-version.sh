#!/usr/bin/env bash
# Usage: npm-has-version.sh <name>@<version>
# Exit 0: npm has this version. Exit 1: npm does not have it (404).
# Exit 2: any other error (network, registry outage, auth). Callers must not read that as
# "not published".
set -uo pipefail

spec="${1:?usage: npm-has-version.sh <name>@<version>}"

if out=$(npm view "$spec" version 2>&1); then
  [ -n "$out" ] && exit 0
  exit 1
fi

if grep -q 'E404' <<< "$out"; then
  exit 1
fi

echo "$out" >&2
exit 2
