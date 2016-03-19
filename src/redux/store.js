import { createStore } from 'redux'
import todoApp from './reducers/todo.reducer'
import {todo} from '../config/common'

let store = createStore(todoApp)

let unsubscribe = store.subscribe(() => {
  localStorage.setItem(todo.STORAGE_KEY, JSON.stringify(store.getState().todos))
})

export default store
