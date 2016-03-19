import React, { Component, PropTypes } from 'react'
import {findDOMNode} from 'react-dom'
import Todo from './todo'
require('./todos.less')

export default class TodoList extends Component {
  render () {
    const todos = this.props.todos
    return (
      <div className="list">
        <ul>
          {this.props.todos.map((todo, index) =>
            <Todo key={index} 
            index={index}
            text={todo.text}
            done={todo.done} 
            deleteItem={(index) => this.deleteItem(index)} 
            toggleDone={(index) => this.handleToggleDone(index)}
            editTodoText={(text, index) => this.editTodoText(text, index)}
            />
          )}
        </ul>
      </div>
    )
  }
  
  deleteItem (index) {
    this.props.onDeleteItem(index)
  }
  
  handleToggleDone (index) {
    this.props.onToggleDone(index)
  }
  
  editTodoText (text, index) {
    this.props.onEditTodo(text, index)
  }
}