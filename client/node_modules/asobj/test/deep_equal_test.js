/**
 * Test case for deepEqual.
 * Runs with mocha.
 */
'use strict'

const deepEqual = require('../lib/deep_equal.js')
const assert = require('assert')
const co = require('co')

describe('deep-equal', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Deep equal', () => co(function * () {
    assert.ok(
      deepEqual([ 'foo', 'bar' ], [ 'foo', 'bar' ])
    )
    assert.ok(
      !deepEqual([ 'foo', 'bar' ], [ 'foo', 'baz' ])
    )
    assert.ok(
      deepEqual({ foo: 'bar' }, { foo: 'bar' })
    )
    assert.ok(
      !deepEqual({ foo: 'bar' }, { foo: 'baz' })
    )
  }))
})

/* global describe, before, after, it */
