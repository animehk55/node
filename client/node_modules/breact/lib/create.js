/**
 * Create an element
 * @function create
 * @param {Object} Component
 * @param {Object} props
 * @param {...Object} children - Child elements
 * @returns {Object}
 */
'use strict'

const React = require('react')

/** @lends create */
function create (Component, props, ...children) {
  Component = Component.default || Component
  props = Object.assign({}, props) // Copy props to cut prototype chain
  children = [].concat(children || []).reduce((children, child) => children.concat(child), [])
  return React.createElement(Component, props, ...children)
}

module.exports = create
