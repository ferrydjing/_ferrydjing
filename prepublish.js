const shell = require('shelljs')
const pkg = require('./package.json')

shell.exec('yarn test')

const date = +new Date()

shell.exec('git add .')
shell.exec(`git commit -m ${pkg.version}.${date}`)
shell.exec('git push')
