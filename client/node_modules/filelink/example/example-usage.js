'use strict'

const filelink = require('filelink')

filelink('src/foo.js', 'dest/foo-link.js', {
  force: true
}).then(() => {
  /* ... */
});