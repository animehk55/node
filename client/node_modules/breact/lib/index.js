/**
 * Browser react utility
 * @module breact
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get autobind () { return d(require('./autobind')) },
  get create () { return d(require('./create')) },
  get markup () { return d(require('./markup')) },
  get mount () { return d(require('./mount')) },
  get once () { return d(require('./once')) },
  get wrap () { return d(require('./wrap')) }
}
