# LI.FI - Types
Types for LI.FI projects

### Summary
This package contains all common types for the [LI.FI SDK](https://github.com/lifinance/sdk).
Learn more about LI.FI on (https://li.fi).


Check out the [Changelog](./CHANGELOG.md) to see what changed in the last releases.

### Install dependencies

Install dependencies with yarn:

```bash
yarn install
```

### Test

Test your code with Jest framework:

```bash
yarn test
```

**Note:** Example TypeScript Package uses [husky](https://typicode.github.io/husky/), [pinst](https://github.com/typicode/pinst) and [commitlint](https://commitlint.js.org/) to automatically execute test and [lint commit message](https://www.conventionalcommits.org/) before every commit.

### Build

Build production (distribution) files in your **dist** folder:

```bash
yarn build
```


### Release
In order to release a new version of the package you have to run 

```bash
yarn release
```

This will 
* bump the version number according to the types of the last commits (i.e. if it is a major, minor or bug fix release)
* create a new git tag
* update the CHANGELOG.md

Afterwards, all you have to do is run 

```bash
git push && git push --tags
```
