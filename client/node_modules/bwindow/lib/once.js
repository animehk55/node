/**
 * Bind window event once
 * @function once
 * @param {string} event - Event to bind
 * @param {function} handler - Event handler
 * @returns {function} - Function to cancel the binding
 */
'use strict'

const get = require('./get')

/** @lends once */
function once (event, handler) {
  const window = get('window', { strict: true })
  let binding = function onceWrap (...args) {
    window.removeEventListener(event, binding)
    handler(...args)
  }
  window.addEventListener(event, binding)
  let cancel = () => window.removeEventListener(event, binding)
  return Object.assign(cancel, { cancel })
}

module.exports = once
