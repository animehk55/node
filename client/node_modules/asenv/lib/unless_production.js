/**
 * Do unless production
 * @function unlessProduction
 * @param {function} handler
 */
'use strict'

const isProduction = require('./is_production')

/** @lends unlessProduction */
function unlessProduction (handler) {
  if (isProduction()) {
    return false
  }
  const assert = require('assert')
  return handler(assert)
}

module.exports = unlessProduction
