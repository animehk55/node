/**
 * Get object from window
 * @function get
 * @param {string} name - Name of object
 * @param {Object} [options] - Optional settings
 * @param {boolean} [options.strict] - Throws error when not found.
 * @returns {?Object}
 */
'use strict'

let _window = () => typeof window === 'undefined' ? null : window

/** @lends get */
function get (name, options = {}) {
  let window = _window()
  let keys = name.split(/\./g)
  let found = window && window[ keys.shift() ]
  while (keys.length && found) {
    found = found[ keys.shift() ]
  }
  let failed = options.strict && !found
  if (failed) {
    throw new Error(`${name} not found!`)
  }
  return found
}

module.exports = get
