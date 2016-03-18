import React, { Component, PropTypes } from 'react'
import {findDOMNode} from 'react-dom'

export default class AddTodo extends Component {
  render () {
    return (
      <div className="input">
        <input className="form-control" autofocus autoComplete="off"
        ref="todoInput"
        placeholder="What needs to be done?"
        onKeyUp={this.handleEnter.bind(this)}
        />
      </div>
    )
  }
  
  handleEnter(e) {
    if (e.key === 'Enter') {
      const node = findDOMNode(this.refs.todoInput)
      const value = node.value.trim()
      if (value) this.props.onSave(value)
      node.value = ''
    }
  }
}

AddTodo.PropTypes = {
  onSave: PropTypes.func.isRequired
}