'use strict'

import {mount, create, once} from 'breact'
import IndexComponent from '../components/index_component'

once('DOMContentLoaded', () => {
  let element = create(IndexComponent, {})
  mount('mount-root', element).then(() => {
    // The component is ready.
  })
})
