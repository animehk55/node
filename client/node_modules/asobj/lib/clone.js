/**
 * Clone a object
 * @function clone
 * @param {Object} src - Source object to clone
 * @param {Object} [options={}] - Optional settings
 * @returns {Object} - Cloned object
 */
'use strict'

/** @lends clone */
function clone (src, options = {}) {
  let cloned = Object.assign({}, src)

  let without = [].concat(options.without || [])
  for (let name of without) {
    delete cloned[ name ]
  }

  return cloned
}

module.exports = clone
