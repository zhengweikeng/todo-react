import { createStore } from 'redux'
import todoApp from './reducers/todo.reducer'
import {todo} from '../config/common'

let store = createStore(todoApp)

// 打印初始状态
// console.log(store.getState())

// 监听 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() => {
  localStorage.setItem(todo.STORAGE_KEY, JSON.stringify(store.getState().items))
})

// 发起一系列 action
// store.dispatch(addTodo('test!!'))

// 停止监听 state 更新
// unsubscribe()

export default store