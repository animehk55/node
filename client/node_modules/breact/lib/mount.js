/**
 * Mount an element into dom
 * @function mount
 * @param {string|Object} container - Container element or it's id
 * @param {Object} element - React element to mount.
 * @returns {Promise}
 */
'use strict'

const { get } = require('bwindow')
const ReactDOM = require('react-dom')

/** @lends mount */
function mount (container, element) {
  if (!container) {
    return Promise.reject(new Error('Container not found'))
  }
  if (typeof container === 'string') {
    const document = get('document', { strict: true })
    let found = document.getElementById(container)
    if (!container) {
      return Promise.reject(new Error(`Container not found: ${container}`))
    }
    container = found
  }

  return new Promise((resolve, reject) =>
    ReactDOM.render(element, container, () => resolve())
  )
}
module.exports = mount
