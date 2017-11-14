/**
 * Random boolean value.
 * @function randomBool
 * @returns {boolean} - Random boolean.
 */

'use strict'

const random = require('./random')

/** @lends randomBool */
function randomBool () {
  return random() > random()
}

module.exports = randomBool;

