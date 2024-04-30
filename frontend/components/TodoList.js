import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  // method
  render() {
    // functions
    const { todosProp, toggleIsChecked, isHideCompleted } = this.props
    let filterIsHideCompleted = todosProp.filter((todo) => {
      if (isHideCompleted) {
        return todo.isChecked === false
      } else {
        return todo
      }
    })
    console.log("filterIsHideCompleted:", filterIsHideCompleted)
    return (
      <div>
        {filterIsHideCompleted.map((todo, index) => {
          return <Todo key={index} todo={todo} toggleIsChecked={toggleIsChecked} />
        })}
      </div>
    )
  }
}
