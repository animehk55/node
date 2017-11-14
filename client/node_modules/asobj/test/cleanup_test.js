/**
 * Test case for cleanup.
 * Runs with mocha.
 */
'use strict'

const cleanup = require('../lib/cleanup.js')
const assert = require('assert')
const co = require('co')

describe('cleanup', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Cleanup', () => co(function * () {
    let foo
    let values = {
      foo,
      bar: 'This is bar'
    }
    assert.equal(Object.keys(values).length, 2)
    cleanup(values)
    assert.equal(Object.keys(values).length, 1)
  }))
})

/* global describe, before, after, it */
