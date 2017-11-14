/**
 * Test case for wrap.
 * Runs with mocha.
 */
'use strict'

const wrap = require('../lib/wrap.js')
const assert = require('assert')
const React = require('react')
const co = require('co')

describe('wrap', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Wrap', () => co(function * () {
    let Base = React.createClass({
      propTypes: {
        hoge: React.PropTypes.string
      },
      render () {
        return React.createElement('div')
      },
      statics: {
        foo () {
          return 'This is foo!'
        }
      }
    })
    let Wrapped = wrap(Base, {
      statics: {
        bar () {
          return 'This is bar'
        }
      }
    })
    let elm = React.createElement(Wrapped, {
      id: 'the-testing-class'
    })
    assert.ok(elm)
    assert.equal(elm.props.id, 'the-testing-class')
    assert.ok(Wrapped.foo())
  }))
})

/* global describe, before, after, it */
