/**
 * @function _followSymlink
 * @private
 */

'use strict'

const fs = require('fs')
const path = require('path')
const co = require('co')

/** @lends _followSymlink */
function _followSymlink (filename) {
  return co(function * () {
    let stat = yield new Promise((resolve, reject) =>
      fs.lstat(filename, (err, stat) => err ? reject(err) : resolve(stat))
    )
    if (stat.isSymbolicLink()) {
      let linked = yield new Promise((resolve, reject) =>
        fs.readlink(filename, (err, linked) => err ? reject(err) : resolve(linked))
      )
      linked = path.join(path.dirname(filename, linked))
      return yield _followSymlink(linked)
    }
    return filename
  })
}

module.exports = _followSymlink
