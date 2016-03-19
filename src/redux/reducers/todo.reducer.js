import { combineReducers } from 'redux'
import {todo, filter} from '../../config/common'

const todoFilter = (state="all", action) => {
  switch (action.type) {
    case filter.ALL:
      return filter.ALL
    case filter.COMPLETE:
      return filter.COMPLETE
    case filter.ACTIVE:
      return filter.ACTIVE
    default:
      return state
  }
}

const initState = JSON.parse(localStorage.getItem(todo.STORAGE_KEY) || '[]')
const todos = (state = initState, action) => {
  let item = null
  switch (action.type) {
    case todo.ADD_TODO:
      return [...state, {
        text: action.value,
        done: false      
      }]
    case todo.DELETE_TODO:
      return [
        ...state.slice(0, action.value),
        ...state.slice(action.value+1)
      ]
    case todo.EDIT_TODO:
      item = state.slice(action.value.index, action.value.index + 1)[0]
      item.text = action.value.text
      return [
        ...state.slice(0, action.value.index),
        item,
        ...state.slice(action.value.index+1)  
      ] 
    case todo.UPDATE_TODO_STATE:
      item = state.slice(action.value, action.value + 1)[0]
      item.done = !item.done
      return [
        ...state.slice(0, action.value),
        item,
        ...state.slice(action.value+1)  
      ]
    case todo.CLEAR_ALL_TODO:
      return []
    default:
      return state
  }
}

export default combineReducers({
  todoFilter,
  todos
})