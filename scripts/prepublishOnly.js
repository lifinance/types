import pkg from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'

const { outputFileSync, pathExistsSync, readJsonSync, writeJsonSync } = pkg
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

assertBuildOutput()
generatePackageJson()

// Refuses to publish without build output. `pnpm install` does not build (there is no
// `prepare` script), so a publish from a clean tree would ship entry points that do not exist.
// The `_cjs`/`_esm` package.json files carry the module `type`, which the published
// package.json leaves out on purpose (see generatePackageJson).
function assertBuildOutput() {
  const { main, module, types } = readJsonSync(
    path.join(__dirname, '../package.json')
  )
  const required = [
    main,
    module,
    types,
    './src/_cjs/package.json',
    './src/_esm/package.json',
  ]
  const missing = required.filter(
    (file) => !pathExistsSync(path.join(__dirname, '..', file))
  )
  if (missing.length > 0) {
    throw new Error(
      `Build output is missing (${missing.join(', ')}). Run \`pnpm build\` before publishing.`
    )
  }
}

// Generates a package.json to be published to NPM with only the necessary fields.
function generatePackageJson() {
  const packageJsonPath = path.join(__dirname, '../package.json')
  const tmpPackageJson = readJsonSync(packageJsonPath)

  writeJsonSync(`${packageJsonPath}.tmp`, tmpPackageJson, { spaces: 2 })

  const {
    name,
    description,
    dependencies,
    peerDependencies,
    peerDependenciesMeta,
    version,
    files,
    exports: exports_,
    // NOTE: We explicitly don't want to publish the type field. We create a separate package.json for `src/cjs` and `src/esm` that has the type field.
    // type,
    main,
    module,
    types,
    typings,
    typesVersions,
    sideEffects,
    license,
    repository,
    authors,
    keywords,
  } = tmpPackageJson

  // Generate proxy packages for each export.
  const files_ = [...files]
  for (const [key, value] of Object.entries(exports_)) {
    if (typeof value === 'string') {
      continue
    }
    if (key === '.') {
      continue
    }
    if (!value.default || !value.import) {
      throw new Error('`default` and `import` are required.')
    }

    outputFileSync(
      `${key}/package.json`,
      `{
  ${Object.entries(value)
    .map(([k, v]) => {
      const key = (() => {
        if (k === 'import') {
          return 'module'
        }
        if (k === 'default') {
          return 'main'
        }
        if (k === 'types') {
          return 'types'
        }
        throw new Error('Invalid key')
      })()
      return `"${key}": "${v.replace('./', '../')}"`
    })
    .join(',\n  ')}
}`
    )
    files_.push(key.replace('./', ''))
  }

  writeJsonSync(
    packageJsonPath,
    {
      name,
      description,
      dependencies,
      peerDependencies,
      peerDependenciesMeta,
      version,
      files: files_,
      exports: exports_,
      // type,
      main,
      module,
      types,
      typings,
      typesVersions,
      sideEffects,
      license,
      repository,
      authors,
      keywords,
    },
    { spaces: 2 }
  )
}
