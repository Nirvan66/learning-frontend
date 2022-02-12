import React, { Component } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";

export default class TodoContainer extends Component {
  state = {
    todos: {
      1: { title: "Task 1", completed: true },
      2: { title: "Task 2", completed: false },
      3: { title: "Task 3", completed: false },
    },
  };

  handleChange = (id) => {
    // crazy spread baby
    this.setState((prevState) => ({
      todos: {
        ...prevState.todos,
        [id]: {
          ...prevState.todos[id],
          completed: !prevState.todos[id].completed,
        },
      },
    }));
  };

  delTodo = (id) => {
    this.setState(() => ({
      todos: Object.fromEntries(
        Object.entries(this.state.todos).filter(([idx, todo], _) => {
          return idx !== id;
        })
      ),
    }));
  };

  addTodo = (title) => {
    let newTask = { title: title, completed: false };
    let newId = Math.max(...Object.keys(this.state.todos), 0) + 1;
    console.log(this.state.todos);
    console.log(newId);
    this.setState(() => ({ todos: { ...this.state.todos, [newId]: newTask } }));
  };

  setUpdate = (newTitle, id) => {
    this.setState((prevState) => {
      return {
        todos: {
          ...prevState.todos,
          [id]: {
            ...prevState.todos[id],
            title: newTitle,
          },
        },
      };
    });
  };

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodo} />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
