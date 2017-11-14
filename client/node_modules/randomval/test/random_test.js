/**
 * Test case for random.
 * Runs with mocha.
 */
'use strict'

const random = require('../lib/random.js')
const assert = require('assert')

it('Random', () => {
  for (let i = 0; i < 1000; i++) {
    let val = random()
    assert.ok(0 <= val)
    assert.ok(val <= 1)
  }
})

/* global it */

