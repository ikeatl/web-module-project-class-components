import React from 'react'
import Form from './Form';
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputFieldInfo: "",
      // todos: ["walk the dog", "learn React", "Have fun", "Send a letter", "Ride a bike"],
      todos: [{ name: "walk the dog", isChecked: false }, { name: "learn React", isChecked: false }, { name: "Have fun", isChecked: false }, { name: "Send a letter", isChecked: false }, { name: "Ride a bike", isChecked: false }],
      isHideCompleted: false
    }
  }
  toggleHideCompleted = () => {
    this.setState({ isHideCompleted: !this.state.isHideCompleted })
  }

  toggleIsChecked = (todoName) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.name === todoName) {
          return { ...todo, isChecked: !todo.isChecked }
        }
        return todo
      })
    }))
  }

  handleChange = event => {
    this.setState({ inputFieldInfo: event.target.value });
    console.log(event.target.value)
  };

  handleSubmit = e => {
    e.preventDefault()
    // add items to todo
    // duplicate todos state
    // Add inputFieldInfo to duplicated todos state
    // Set state with updated duplicated todos state

    // this.setState({todos:todos.push(this.state.inputFieldInfo)})
    let copyTodos = this.state.todos
    copyTodos.push({ name: this.state.inputFieldInfo, isChecked: false });
    this.setState({ todos: copyTodos, inputFieldInfo: "" })
  }


  render() {
    return (
      <div>
        <TodoList todosProp={this.state.todos} toggleIsChecked={this.toggleIsChecked} isHideCompleted={this.state.isHideCompleted} />
        <Form submit={this.handleSubmit} change={this.handleChange} inputFieldInfo={this.state.inputFieldInfo} />
        <button onClick={this.toggleHideCompleted}>{this.state.isHideCompleted ? "Show Completed" : "Hide Completed"}</button>
      </div>
    )
  }
}
