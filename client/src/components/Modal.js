import React, { Component } from "react";
import "../App.css";

class Modal extends Component {
//this component helps the user edit an existing todo

  constructor(props) {
    super(props);

  this.modalInput = React.createRef();
  }
  componentDidUpdate() {
    this.modalInput.current.focus();
  }

  //highlight the todo text to be edited
  handleFocus = (e) => {
e.target.select();
  }

  render() {
    console.log('rendering Modal');
    return (
      <form
        className={this.props.show ? "showModal" : "hideModal"}
        onSubmit={this.props.sendModalActionToDatabase}
      >
        <input
        onFocus={this.handleFocus}
          ref={this.modalInput}
          className="modalInput"
          onChange={this.props.modalUpdate}
          type="text"
          value={this.props.action}
        />

        <button>Submit</button>
        <button onClick={this.props.cancelEditing}>Cancel</button>
      </form>
    );
  }
}

export default Modal;
