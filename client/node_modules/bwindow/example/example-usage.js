'use strict'

const { get } = require('bwindow')

// Check document object available
{
  let isServerSide = !get('document')
  /* ... */
}

// With strict options, throws an error when not found
{
  let URL = get('URL', { strict: true })
  /* ... */
}
