import React, { Component } from "react";
import "../App.css";
import axios from "axios";




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

  authPassword = (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      console.log('in authPassword');
      console.log('authPassword Data', data.get('password'));
     
       // send the password to the server for auth   
        axios
        .post('/users/delete', {
            password: data.get('password')
        })
        .then(res => {
          if (res.data.passwordVerification) {
            console.log('response', res.data.passwordVerification);
            //now call another axios request to use the id of the current
            //session user to delete the account. Find mongoose method to do 
            //the delete
          }
        })
        .catch(err => console.log(err));
    };
    
          
        

  

 
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
          name="password"
          placeholder='Enter Password'
        />

        <button style={buttonStyle} >Submit</button>
        <button style={buttonStyle} type="button" onClick={this.modalDeleteUpdate}>Cancel</button>
      </form>
    );
  }
}

export default ModalDelete;