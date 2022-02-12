import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";

export default class TodosList extends Component {
  render() {
    return (
      <Fragment>
        <ul>
          {Object.entries(this.props.todos).map((todo) => (
            <TodoItem
              key={todo[0]}
              todo={todo}
              handleChangeProps={this.props.handleChangeProps}
              deleteTodoProps={this.props.deleteTodoProps}
              setUpdate={this.props.setUpdate}
            />
          ))}
        </ul>
      </Fragment>
    );
  }
}
