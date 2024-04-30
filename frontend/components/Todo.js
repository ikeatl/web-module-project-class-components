import React from 'react'

export default class Todo extends React.Component {


  render() {
    const { todo, toggleIsChecked } = this.props

    return (
      <div onClick={() => toggleIsChecked(todo.name)}>
        {todo.name} {todo.isChecked ? <span>&#10004;</span> : ""}
      </div>
    )
  }
}
