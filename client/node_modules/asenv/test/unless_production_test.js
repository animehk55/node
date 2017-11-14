/**
 * Test case for unlessProduction.
 * Runs with mocha.
 */
'use strict'

const unlessProduction = require('../lib/unless_production.js')
const assert = require('assert')
const co = require('co')

describe('unless-production', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Unless production', () => co(function * () {
    unlessProduction(() => {

    })
  }))
})

/* global describe, before, after, it */
