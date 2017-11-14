/**
 * Create file links.
 * @module filelink
 * @version 3.0.6
 */

'use strict'

const filelink = require('./filelink')
const pkg = require('../package.json')

let lib = filelink.bind(this)

lib.filelink = filelink
lib.version = pkg.version

module.exports = lib
