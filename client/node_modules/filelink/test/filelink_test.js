/**
 * Test case for filelink.
 * Runs with mocha.
 */
'use strict'

const filelink = require('../lib/filelink.js')
const assert = require('assert')
const co = require('co')
const fs = require('fs')

describe('filelink', () => {
  it('Filelink', () => co(function * () {
    yield filelink(__filename, __dirname + '/../tmp/foo/bar', {
      mkdirp: true,
      force: true
    })
    assert.ok(
      fs.existsSync(__dirname + '/../tmp/foo/bar')
    )
  }))

  it('Link dir', () => co(function * () {
    {
      let changed = yield filelink(__dirname, __dirname + '/../tmp/foo/baz', {
        mkdirp: true,
        force: true
      })
      assert.ok(
        fs.existsSync(__dirname + '/../tmp/foo/baz')
      )
    }
    {
      let changed = yield filelink(__dirname, __dirname + '/../tmp/foo/baz', {
        mkdirp: true,
        force: true
      })
      assert.ok(!changed)
      assert.ok(
        fs.existsSync(__dirname + '/../tmp/foo/baz')
      )
    }
  }))
})

/* global describe, it */
