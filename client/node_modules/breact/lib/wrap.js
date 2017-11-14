/**
 * Wrap a element with higher order component
 * @function wrap
 * @param {Object} Base - Base react class
 * @param {Object} spec - Additional spec to wrap
 * @returns {Object} - Wrapped component
 */
'use strict'

const React = require('react')
const { clone } = require('asobj')

const reservedNames = [
  'displayName',
  'mixins',
  'childContextTypes',
  'contextTypes',
  'getDefaultProps',
  'propTypes',
  'statics',
  'autobind'
]

/** @lends wrap */
function wrap (Component, spec) {
  let propTypes = Object.assign({},
    spec.propTypes
  )
  let statics = Object.assign({},
    Object.keys(Component)
      .filter((key) => !~reservedNames.indexOf(key))
      .reduce((statics, key) => Object.assign(statics, {
        [key]: Component[ key ]
      }), {}),
    spec.statics
  )
  return React.createClass(
    Object.assign({
      // Default renderer
      render () {
        const s = this
        let { props } = s
        let wrappedProps = clone(props, {
          without: Object.keys(spec.propTypes || {})
        })
        let children = React.Children.toArray(props.children)
        return React.createElement(Component, wrappedProps, ...children)
      }
    }, spec, {
      propTypes,
      statics
    })
  )
}

module.exports = wrap
