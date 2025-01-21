<div align="center">

[![license](https://img.shields.io/badge/license-Apache%202-blue)](/LICENSE.md)
[![npm latest package](https://img.shields.io/npm/v/@lifi/types/latest.svg)](https://www.npmjs.com/package/@lifi/types)
[![npm downloads](https://img.shields.io/npm/dm/@lifi/types.svg)](https://www.npmjs.com/package/@lifi/types)
[![Follow on Twitter](https://img.shields.io/twitter/follow/lifiprotocol.svg?label=follow+LI.FI)](https://twitter.com/lifiprotocol)

</div>

# LI.FI - Types

Types for the LI.FI stack.

## Summary

This package contains all common types for the [LI.FI SDK](https://github.com/lifinance/sdk).
Learn more about LI.FI on (https://li.fi).

Check out the [Changelog](./CHANGELOG.md) to see what changed in the last releases.

## Installation

```bash
pnpm add @lifi/types
```

or

```bash
npm install --save @lifi/types
```

## Release

The package uses `standard-version` to generate a changelog based on semantic commit history. The `standard-version` package also handles version numbering.

Once main is up to date with the changes to be released execute the following command on the main branch to invoke `standard-version`:

```bash
pnpm release
```

Then to release:

```bash
git push --follow-tags origin main
```

This will push a newly created git tag to the remote repository, which will trigger a github action which will publish the new version to npm
