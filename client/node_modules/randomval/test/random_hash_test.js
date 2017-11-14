/**
 * Test case for randomHash.
 * Runs with mocha.
 */
'use strict'

const randomHash = require('../lib/random_hash.js')
const assert = require('assert')

it('Random hash', () => {
  for (let i = 0; i < 100; i++) {
    let val = randomHash()
    assert.ok(val)
    assert.equal(val.length, 32)
  }
})

it('Random hash with length', () => {
  for (let i = 0; i < 100; i++) {
    let val = randomHash(128)
    assert.ok(val)
    assert.equal(val.length, 128)
  }
})

