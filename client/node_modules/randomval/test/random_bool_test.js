/**
 * Test case for randomBool.
 * Runs with mocha.
 */
'use strict'

const randomBool = require('../lib/random_bool.js')
const assert = require('assert')

it('Random bool', () => {
  for (let i = 0; i < 1000; i++) {
    let val = randomBool()
    assert.equal(typeof val, 'boolean')
  }
})

/* global it */
