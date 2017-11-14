/**
 * Test case for assign.
 * Runs with mocha.
 */
'use strict'

const assign = require('../lib/assign.js')
const assert = require('assert')
const co = require('co')

describe('assign', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Assign', () => co(function * () {
    let assigned = assign({
      foo: 'This is foo'
    }, {
      bar: 'This is bar'
    })
    assert.deepEqual(assigned, {
      foo: 'This is foo', bar: 'This is bar'
    })
  }))
})

/* global describe, before, after, it */
