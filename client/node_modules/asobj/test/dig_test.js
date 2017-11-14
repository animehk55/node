/**
 * Test case for dig.
 * Runs with mocha.
 */
'use strict'

const dig = require('../lib/dig.js')
const assert = require('assert')
const co = require('co')

describe('dig', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Dig', () => co(function * () {
    assert.equal(dig({ foo: 'bar' }, 'foo'), 'bar')
    assert.equal(dig({ foo: { bar: 'baz' } }, 'foo', 'bar'), 'baz')
  }))
})

/* global describe, before, after, it */
