import React, { Component, PropTypes } from 'react'
import {findDOMNode} from 'react-dom'

const hidden = {display: "none"}

export default class Todo extends Component {
  render () {
    let { index, text, done } = this.props
    return (
      <li className="item">
        <input className="todo-checkbox" 
          type="checkbox"
          checked={done} 
          ref="todoCheck"
          onChange={() => this.toggleDone(index)}/>
        <div className={this.completeCheck(done)}
          onDoubleClick={() => this.toggleEditor("none")}
          ref="todoDisplay">
          {text}
        </div>
        <input className="form-control"
          type="text"
          defaultValue={text}
          style={{display: "none"}}
          ref="editInput"
          onKeyUp={(e) => this.editTodoText(e, index)}
          onBlur={(e) => this.editTodoText(e, index)}
        />
        <span className="glyphicon glyphicon-remove remove" 
          onClick={(e) => this.handleDelete(e, index)}
          ref="removeBtn"></span>
      </li>
    )
  }
  completeCheck (done) {
    if (done) {
      return 'text finish'
    }
    return 'text'
  }
  
  handleDelete (e, index) {
    this.props.deleteItem(index)
  }
  
  toggleDone (index) {
    this.props.toggleDone(index)
  }
  
  toggleEditor (display="") {
    this.refs.todoCheck.style.display = display
    this.refs.todoDisplay.style.display = display
    this.refs.removeBtn.style.display = display
    if (display === "") {
      this.refs.editInput.style.display = "none"
      return
    }
    this.refs.editInput.style.display = ""
  }
  
  editTodoText (e, index) {
    if (e.key === 'Enter' || e.type === 'blur') {
      this.toggleEditor()
      const value = e.target.value.trim()
      if (value) this.props.editTodoText(value, index)
    }
    if (e.key === 'Escape') {
      this.toggleEditor()
      this.refs.editInput.value = this.props.text
    }
  }
}