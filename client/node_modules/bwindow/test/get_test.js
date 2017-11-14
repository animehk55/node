/**
 * Test case for get.
 * Runs with mocha.
 */
'use strict'

const get = require('../lib/get.js')
const assert = require('assert')
const injectmock = require('injectmock')
const co = require('co')

describe('get', function () {
  this.timeout(3000)

  before(() => co(function * () {
    injectmock(global, 'window', {
      document: {},
      location: {
        href: 'http://example.com:3000/foo/bar'
      }
    })
  }))

  after(() => co(function * () {
    injectmock.restoreAll()
  }))

  it('Get', () => co(function * () {
    assert.ok(get('document', { strict: true }))
    assert.ok(!get('__unknown_prop__', { strict: false }))

    {
      let href = get('location.href')
      assert.equal('http://example.com:3000/foo/bar', href)
    }
  }))
})

/* global describe, before, after, it */
