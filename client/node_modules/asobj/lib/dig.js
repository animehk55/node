/**
 * Dig object props
 * @function dig
 * @param {Object} src - Source object
 * @param {...string} keys - Keys to dig
 * @returns {*} - Values
 */
'use strict'

/** @lends dig */
function dig (src = {}, ...keys) {
  let value = src
  for (let key of keys) {
    value = value[ key ]
    let finish = (typeof value === 'undefined') || (value === null)
    if (finish) {
      return value
    }
  }
  return value
}

module.exports = dig
