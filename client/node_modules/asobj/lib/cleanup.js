/**
 * Delete undefined properties.
 * @function cleanup
 * @param {Object} values - Values to cleanup
 * @returns {Object} - Clean value
 */
'use strict'

/** @lends cleanup */
function cleanup (values) {
  for (let name of Object.keys(values)) {
    let shouldClean = typeof values[ name ] === 'undefined'
    if (shouldClean) {
      delete values[ name ]
    }
  }
  return values
}

module.exports = cleanup
