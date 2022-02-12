import React, { Component } from "react";

export default class InputTodo extends Component {
  state = { newTaskTitle: "" };

  todoInputChange = (e) => {
    this.setState(() => ({ ...this.state, [e.target.name]: e.target.value }));
  };

  render() {
    return (
      <div className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={this.state.task}
          onChange={(e) => this.todoInputChange(e)}
          name="newTaskTitle"
        />
        <button
          className="input-submit"
          onClick={() => this.props.addTodoProps(this.state.newTaskTitle)}
        >
          Submit
        </button>
      </div>
    );
  }
}
