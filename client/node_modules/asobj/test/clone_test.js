/**
 * Test case for clone.
 * Runs with mocha.
 */
'use strict'

const clone = require('../lib/clone.js')
const assert = require('assert')
const co = require('co')

describe('clone', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Clone', () => co(function * () {
    let obj = clone({
      foo: 'bar',
      baz: 'quz'
    }, {
      without: 'baz'
    })
    assert.deepEqual(obj, { foo: 'bar' })
  }))
})

/* global describe, before, after, it */
