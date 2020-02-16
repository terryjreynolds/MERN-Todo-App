import React, { Component } from "react";
import "../App.css";




class ModalDelete extends Component {

    constructor(props) {
        super(props);
       
        this.state = {         
        action: '',            
        };       
      }

  componentDidMount() {
    this.nameInput.focus();

  }
  modalUpdate = (e) => {
      this.setState({
        action: e.target.value
      });
  }

  modalDeleteUpdate = () => {
      console.log('im in modalDeleteUpdate');
    this.props.setShowModalDeleteState(false);
  }

 
  render() {
      const buttonStyle = {
          margin: "0 0 0 2px",
          backgroundColor: "#7f5a83",
          width: "6vw"
      }
    return (
      <form
      className={this.props.showModalDelete ? "showModalDelete" : "hideModalDelete" }
        onSubmit={this.authPassword}
      >
      
        <input
          ref={input => {
            this.nameInput = input;
          }}
          className="modalDeleteInput"
          onChange={this.modalUpdate}
          type="text"
          value={this.action}
          placeholder='Enter Password'
        />

        <button style={buttonStyle} >Submit</button>
        <button style={buttonStyle} type="button" onClick={this.modalDeleteUpdate}>Cancel</button>
      </form>
    );
  }
}

export default ModalDelete;