#!/usr/bin/env node

/**
 * Generate shim source
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { runTasks } = require('ape-tasking')
const ababelES2015 = require('ababel-es2015')

runTasks('browser', [
  () => ababelES2015('**/*.js', {
    cwd: 'lib',
    out: 'shim/browser'
  })
], true)
