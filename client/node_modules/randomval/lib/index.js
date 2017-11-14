/**
 * 
 * @module randomval
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get randomBool () { return d(require('./random_bool')) },
  get randomDate () { return d(require('./random_date')) },
  get randomHash () { return d(require('./random_hash')) },
  get randomInt () { return d(require('./random_int')) },
  get random () { return d(require('./random')) }
}
