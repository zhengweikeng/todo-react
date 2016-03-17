import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import App from './components/app'
require('bootstrap/dist/css/bootstrap.css')

const el = document.getElementById('todo-react')
render(
  <App />,
  el
)