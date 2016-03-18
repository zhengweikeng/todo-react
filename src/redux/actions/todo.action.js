import {todo} from '../../config/common'

const addTodo = text => ({type: todo.ADD_TODO, text})
const deleteTodo = text => ({type: todo.ADD_TODO, text})
const editTodo = text => ({type: todo.ADD_TODO, text})
const updateTodoState = text => ({type: todo.ADD_TODO, text})
const clearAll = text => ({type: todo.ADD_TODO, text})

export {addTodo, deleteTodo, editTodo, updateTodoState, clearAll}