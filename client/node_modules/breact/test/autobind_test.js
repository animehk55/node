/**
 * Test case for autobind.
 * Runs with mocha.
 */
'use strict'

const autobind = require('../lib/autobind.js')
const assert = require('assert')
const co = require('co')
const { Component } = require('react')

describe('autobind', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Autobind', () => co(function * () {
    class Foo extends Component {
      constructor (props) {
        super(props)
        autobind(this)
      }

      get yo () {
        return 'yo!'
      }

      sayYo () {
        return this.yo
      }
    }
    let foo = new Foo()
    assert.equal(foo.sayYo(), 'yo!')
    {
      class FooWrap extends Foo {

      }
      let { sayYo } = new FooWrap({})
      assert.equal(sayYo(), 'yo!')
    }
  }))
})

/* global describe, before, after, it */
