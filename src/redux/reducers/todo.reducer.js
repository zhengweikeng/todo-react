import {todo} from '../../config/common'

const initState = {
  items: JSON.parse(localStorage.getItem(todo.STORAGE_KEY) || '[]')
}
const todoApp = (state = initState, action) => {
  switch (action.type) {
    case todo.ADD_TODO:
      return {
        items: [...state.items, {
          text: action.value,
          done: false      
        }]
      }
    case todo.DELETE_TODO:
      return {
        items: [
          ...state.items.slice(0, action.value),
          ...state.items.slice(action.value+1)
        ]
      }
    case todo.EDIT_TODO:
      return
    case todo.UPDATE_TODO_STATE:
      return
    case todo.CLEAR_ALL_TODO:
      return []
    default:
      return state
  }
}

export default todoApp