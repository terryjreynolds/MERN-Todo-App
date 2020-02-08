import React, { Component } from "react";
import Icon from "../icons/editSolidIcon";
import IconTrash from "../icons/trashIcon";

//todos, deleteTodo, onFocus
class ListTodo extends Component {
  render() {
    let todos = this.props.todos;
    console.log("todos", todos);

    const iconDivStyle = {
      float: "right"
    };
    const trashStyle = {
      marginTop: "8px"
    };

    return (
      <ul>
        {todos && todos.length > 0 ? (
          todos.map(todo => {
            return (
              <li key={todo._id}>
                <input type="checkbox" className="checkbox" />
                {todo.action}
                <div
                  style={iconDivStyle}
                  disabled={this.props.show ? true : false}
                  onClick={() => this.props.deleteTodo(todo._id)}
                >
                  <IconTrash width={"3vw"} style={trashStyle} />
                </div>
                <div
                  style={iconDivStyle}
                  disabled={this.props.show ? true : false}
                  onClick={() =>
                    this.props.editTodoModal(todo._id, todo.action)
                  }
                >
                  <Icon width={"4vw"} />
                </div>
                <div className="date">last edited: {todo.edited}</div>
              </li>
            );
          })
        ) : (
          <li>No todo(s) left</li>
        )}
      </ul>
    );
  }
}

export default ListTodo;
