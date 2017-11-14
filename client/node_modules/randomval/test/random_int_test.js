/**
 * Test case for randomInt.
 * Runs with mocha.
 */
'use strict'

const randomInt = require('../lib/random_int.js')
const assert = require('assert')

it('Random int', () => {
  for (let i = 0; i < 100; i++) {
    let val = randomInt()
    assert.equal(parseInt(val), val)
  }
})

it('Random int in range', () => {
  let min = 0, max = 100;
  for (let i = 0; i < 100; i++) {
    let val = randomInt(min, max)
    assert.equal(parseInt(val), val)
    assert.ok(min <= val)
    assert.ok(val <= max)
  }
})

/* global it */
