import React, { Component } from "react";
import axios from "axios";

import { truncateDate } from "../helpers";

class Input extends Component {

  constructor(props) {
    super(props);

  //create a ref to the todo input field
 this.textInput = React.createRef();


  this.state = {
    action: "",
    edited: truncateDate(Date())
  };

}

componentDidMount(){
  this.textInput.current.focus();
}

  addTodo = e => {
    e.preventDefault();

    const task = { action: this.state.action, edited: (this.state.edited)[0]};
    console.log('task', task);

    if (task.action && task.action.length > 0) {
      axios
        .put("/api/todos", task)
        .then(res => {
          console.log("res", res);
          if (res.data) {
            this.props.getTodos();
            this.setState({ action: "" });
          }
        })
        .catch(err => console.log(err));
    } else {
      console.log("input field required");
    }
  };

  handleChange = e => {
    this.setState({
      action: e.target.value
    });
  };

  render() {
    let { action } = this.state;

    return (
      <form onSubmit={this.addTodo}>
        <input
        ref={this.textInput}
          placeholder="Create a new to-do item"
          type="text"
          onChange={this.handleChange}
          value={action}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Input;
