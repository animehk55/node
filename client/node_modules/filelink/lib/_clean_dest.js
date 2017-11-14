/**
 * @function _cleanDest
 * @private
 */

'use strict'

const { existsAsync, statAsync } = require('asfs')
const co = require('co')
const rimraf = require('rimraf')
const filedel = require('filedel')

/** @lends _cleanDest */
function _cleanDest (filename) {
  return co(function * () {

    let exists = yield existsAsync(filename)
    if (!exists) {
      return
    }
    let stat = yield statAsync(filename)
    if (stat.isDirectory()) {
      yield new Promise((resolve, reject) =>
        rimraf(filename, (err) => err ? reject(err) : resolve())
      )
    } else {
      yield filedel(filename)
    }
  })
}

module.exports = _cleanDest
