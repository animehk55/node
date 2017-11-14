/**
 * Create static markup
 * @function markup
 * @param {Object} Component - Component class
 * @param {Object} props - Properties
 * @param {...Object[]} children - Child elements
 * @returns {string} - Static markup
 */
'use strict'

const create = require('./create')
const ReactDomServer = require('react-dom/server')

/** @lends markup */
function markup (Component, props, ...children) {
  children = [].concat(...children)
  let elm = create(Component, props, ...children)
  return ReactDomServer.renderToStaticMarkup(elm)
}

module.exports = markup
