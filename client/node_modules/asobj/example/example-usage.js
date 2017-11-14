'use strict'

const { clone } = require('asobj')

{
  let obj = clone({
    foo: 'bar',
    baz: 'quz'
  }, {
    without: 'baz'
  })
  console.log(obj) // -> { foo: 'bar' }
}
