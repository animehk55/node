/**
 * Test case for randomDate.
 * Runs with mocha.
 */
'use strict'

const randomDate = require('../lib/random_date.js')
const assert = require('assert')

it('Random date', () => {
  for (let i = 0; i < 100; i++) {
    let date = randomDate()
    assert.ok(date)
    assert.ok(date instanceof Date)
  }
})

it('Random date in range', () => {
  let from = new Date()
  let to = new Date(from.getTime() + 200)
  for (let i = 0; i < 100; i++) {
    let date = randomDate(from, to)
    assert.ok(date)
    assert.ok(from.getTime() <= date.getTime())
    assert.ok(date.getTime() <= to.getTime())
  }
})

/* global it */

