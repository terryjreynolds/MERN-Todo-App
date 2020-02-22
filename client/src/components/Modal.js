import React, { Component } from "react";
import "../App.css";

class Modal extends Component {
  componentDidMount() {
    this.nameInput.focus();
  }

  render() {
    console.log('rendering Modal');
    return (
      <form
        className={this.props.show ? "showModal" : "hideModal"}
        onSubmit={this.props.sendModalActionToDatabase}
      >
        <input
          ref={input => {
            this.nameInput = input;
          }}
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
