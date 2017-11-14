/**
 * Random int value.
 * @function randomInt
 * @param {number} [min=Number.MIN_SAFE_INTEGER] - Min value.
 * @param {number} [max=Number.MAX_SAFE_INTEGER] - Max value.
 * @returns {number} - Random int.
 */

'use strict'

const random = require('./random')

/** @lends randomInt */
function randomInt (min, max) {
  if (typeof min === 'undefined') {
    min = Number.MIN_SAFE_INTEGER || -9007199254740991
  }
  if (typeof max === 'undefined') {
    max = Number.MAX_SAFE_INTEGER || 9007199254740991
  }
  return parseInt((max - min) * random() + min)
}

module.exports = randomInt;