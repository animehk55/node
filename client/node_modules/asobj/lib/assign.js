/**
 * Assign object
 * @function assign
 * @returns {Object} - Assigned object
 */
'use strict'

/** @lends assign */
function assign (...args) {
  return Object.assign(...args)
}

module.exports = assign
