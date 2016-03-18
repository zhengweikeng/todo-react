import React, { Component } from 'react'
import AddTodo from './addTodo'
import TodoList from './todoList'
import { connect } from 'react-redux'
import {addTodo, deleteTodo, editTodo, updateTodoState, clearAll} from '../redux/actions/todo.action'
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
          <TodoList todos={this.props.todos} onDeleteItem={(index) => this.deleteItem(index)} />
        </div>
        <div className="panel-footer">
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
} 

function select(state) {
  return {
    todos: state.items
  }
}

export default connect(select)(App)