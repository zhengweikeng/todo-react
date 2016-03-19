import React, { Component } from 'react'
import AddTodo from './addTodo'
import TodoList from './todoList'
import { connect } from 'react-redux'
import {addTodo, deleteTodo, editTodo, updateTodoState, clearAll} from '../redux/actions/todo.action'
import {showAll, showCompleted, showActive} from '../redux/actions/filter.action'
import {filter} from '../config/common'
const panelMarginTop = {
  marginTop: "30px"
}

class App extends Component {
  render () {
    this.dispatch = this.props.dispatch
    return (
      <div className="panel panel-primary" style={panelMarginTop} >
        <div className="panel-heading">
          <h4>Todos</h4>
        </div>
        <div className="panel-body">
          <AddTodo onSave={this.saveItem.bind(this)}/>
          <TodoList todos={this.props.todos} 
          onDeleteItem={(index) => this.deleteItem(index)} 
          onToggleDone={(index) => this.toggleDone(index) }
          onEditTodo={(text, index) => this.eidtTodoText(text, index)}/>
        </div>
        <div className="panel-footer">
          <label>Remaining: {this.computeRemaining()} items</label>
          <div className="todo-btn-group">
            <button className="btn btn-default" onClick={this.todosShowAll.bind(this)}>All</button>
            <button className="btn btn-default" onClick={this.todosShowActive.bind(this)}>Active</button>
            <button className="btn btn-default" onClick={this.todosShowComplete.bind(this)}>Completed</button>
            <button className="btn btn-default" onClick={this.clearAll.bind(this)}>Clear All</button>
          </div>
        </div>
      </div>
    )
  }
  
  saveItem (text) {
    this.dispatch(addTodo(text))
  }
  
  deleteItem (index) {
    this.dispatch(deleteTodo(index))
  }
  
  toggleDone (index) {
    this.dispatch(updateTodoState(index))
  }
  
  eidtTodoText (text, index) {
    this.dispatch(editTodo({text, index}))
  }
  
  todosShowAll () {
    this.dispatch(showAll())
  }

  todosShowActive () {
    this.dispatch(showActive())
  }
  
  todosShowComplete () {
    this.dispatch(showCompleted())
  }
  
  clearAll () {
    this.dispatch(clearAll())
  }
  
  computeRemaining () {
    return this.props.todos.filter(todo => !todo.done).length
  }
  
} 

const filterTodos = (todos, todoFilter) => {
  if (todoFilter === filter.ACTIVE) {
    return todos.filter(todo => !todo.done)
  } else if (todoFilter === filter.COMPLETE) {
    return todos.filter(todo => todo.done)
  } else return todos
}

const select = (state) => {
  return {
    todos: filterTodos(state.todos, state.todoFilter),
    todoFilter: state.todoFilter
  }
}

export default connect(select)(App)