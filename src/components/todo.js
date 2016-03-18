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
          checked={done} />
        <div className={this.completeCheck(done)}>
          {text}
        </div>
        <span className="glyphicon glyphicon-remove remove" onClick={(e) => this.handleDelete(e, index)}></span>
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
    console.log(index)
  }
}