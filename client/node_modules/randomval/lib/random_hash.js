/**
 * Random hash value.
 * @function randomHash
 * @param {number} [len=32] - Hash length.
 * @returns {string} - Random hash string.
 */

'use strict'

const uuid = require('uuid')

/** @lends randomHash */
function randomHash (len) {
  let val = uuid().replace(/\-/g, '')
  while (val.length < len) {
    val += randomHash()
  }
  return val.substr(0, len)
}

module.exports = randomHash

