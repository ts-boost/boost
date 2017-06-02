const { rollup } = require('rollup')
const { writeFileSync, mkdirSync, rmdirSync, statSync, existsSync, readdirSync, unlinkSync } = require('fs')
const { join } = require('path')
const nodeResolve = require('rollup-plugin-node-resolve')
const ts = require('rollup-plugin-typescript')
const typescript = require('typescript')

const NAMESPACE = `@tsboost`

exports.bundlePackage = bundlePackage

const plugins =
  [
    ts({ typescript }),
    nodeResolve({ jsnext: true, module: true, main: true }),
  ]

async function bundlePackage(package) {
  console.log(`Creating UMD bundle for ${NAMESPACE}/${packageName(package)}...`)
  const entry = join(package, 'src/index.ts')
  const dest = join(package, 'dist')

  const bundle = await rollup({ entry, plugins })

  const umdResult = bundle.generate({ format: 'umd', moduleName: moduleName(package) })

  removeDirectory(dest)
  mkdirSync(dest)

  const name = packageName(package)

  writeFileSync(join(dest, `${name}.js`), umdResult.code)
  writeFileSync(join(dest, `${name}.js.map`), umdResult.map)
}

function packageName(package) {
  return package.split('packages/')[1]
}

function moduleName(package) {
  const [, name] = package.split('packages/')

  const namespace = `${NAMESPACE.slice(1, 3).toUpperCase}${NAMESPACE.slice(2)}`
  const packageName = `${name[0].toUpperCase()}${name.slice(1)}`

  return `${namespace}${packageName}`
}

function removeDirectory(path) {
  if (existsSync(path) && statSync(path).isDirectory()) {
    readdirSync(path).forEach(p => {
      unlinkSync(join(path, p))
    })

    rmdirSync(path)
  }
}
