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
            done={todo.done} />
          )}
        </ul>
      </div>
    )
  }
}