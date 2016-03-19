import {todo} from '../../config/common'

const addTodo = value => ({type: todo.ADD_TODO, value})
const deleteTodo = value => ({type: todo.DELETE_TODO, value})
const editTodo = value => ({type: todo.EDIT_TODO, value})
const updateTodoState = value => ({type: todo.UPDATE_TODO_STATE, value})
const clearAll = () => ({type: todo.CLEAR_ALL_TODO})

export {addTodo, deleteTodo, editTodo, updateTodoState, clearAll}