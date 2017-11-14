/**
 * Test case for shallowEqual.
 * Runs with mocha.
 */
'use strict'

const shallowEqual = require('../lib/shallow_equal.js')
const assert = require('assert')
const co = require('co')

describe('shallow-equal', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Shallow equal', () => co(function * () {
    assert.ok(shallowEqual({ foo: 'bar' }, { foo: 'bar' }))
    assert.ok(!shallowEqual({ foo: 'bar' }, { foo: 'baz' }))
  }))
})

/* global describe, before, after, it */
