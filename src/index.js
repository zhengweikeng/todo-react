import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './redux/reducers/todo.reducer'
import store from './redux/store'

import App from './components/app'
require('bootstrap/dist/css/bootstrap.css')

let rootEl = document.getElementById('todo-react')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
)