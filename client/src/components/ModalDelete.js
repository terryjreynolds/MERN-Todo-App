import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { Redirect } from 'react-router';




class ModalDelete extends Component {

    constructor(props) {
        super(props);

        this.textInput = React.createRef();
       
       
        this.state = {         
        action: '', 
        flash: '',
        redirect: ''       
        };      
        
      }

//restores focus on input field after the class toggle of Account button click
      componentDidUpdate() {
        if(this.state.redirect === '') {
          this.textInput.current.focus();
        }   
      }
      
      
  modalUpdate = (e) => {
      this.setState({
        action: e.target.value
      });
  }
// via props function updates whether the modaldelete comp is present
  modalDeleteUpdate = () => {
      console.log('im in modalDeleteUpdate');
    this.props.setShowModalDeleteState(false);
  }

//after auth and logout, this deletes the user account
  deleteUserAccount = (id, url) => {
    console.log('in deleteUserAccount');
    console.log('userID', id )
   
    axios
    .delete(`/api/deleteAccount/${id}`)
    .then(res => {
   console.log('deleteAccountResponse', res);
   console.log('res.data.status', res.status);
   console.log('res.data.success', res.data.success)
   if (res.status === 200){
     console.log('resdfsdfsdf');
    this.setState({
      flash: res.data.success,
      action: ''
    })

    this.resetAll(url);
    
   } else {
     console.log('error');
   }
  
    })
    
  }
 //generates conditions for closing of dropdownmenu and redirect to dashboard 
  resetAll = (url) => {

    setTimeout(this.modalDeleteUpdate, 1500);
    setTimeout(() => { this.setState({
      redirect: url,
      flash: ''
    }); }, 1501);
  }
  //if the user flubs the pw input
  tryAgain = () => {
    console.log('in tryAgain');
    this.setState({
      action: '',
       flash: ''
     });
  }
  //checking to see if the user has rights to delete a user account
  authPassword = (e) => {
    const self = this;
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
            console.log('responseid', res.data.userId);
            //now call another axios request to use the id of the current
            //session user to delete the account. Find mongoose method to do 
            //the delete
             this.handleLogout(res.data.userId);
          }else {
            //flash error msg and reset the input field.
            
            this.setState({
              flash: 'Password Incorrect'
             });

             setTimeout(function(){ self.tryAgain() }, 1500);
          }

        })
        .catch(err => console.log(err));
    };

    handleLogout = (id) => { 
    
      //hit the logout endpoint
      axios
      .post(`/users/logout`)
      .then(res => {
        if (res.data) {
          console.log('redirectobj', res.data.redirect);               
          this.deleteUserAccount(id, res.data.redirect);
           
        }
      })
      
     
      .catch(err => console.log(err));
       
      };    
  render() {
    console.log('rendering ModalDelete');
      const buttonStyle = {
          margin: "0 0 0 2px",
          backgroundColor: "#7f5a83",
          width: "6vw"
      }

 //conditionally rendering the dashboard if an account was deleted
 if(this.state.redirect === '/') {
   console.log('REDIRECTING');
  this.setState({
    redirect: ''
  });
  this.props.setUserState(false);
  this.props.setUrlState('/')
return <Redirect to={{
  pathname: 
  '/'
  }}
/>
 }
    return (
     
      <form
      className={this.props.showModalDelete ? "showModalDelete" : "hideModalDelete" }
        onSubmit={this.authPassword}
        
      >
      <p style={{color: 'green'}}>{this.state.flash}</p>
        <input
        
          className="modalDeleteInput"
          onChange={this.modalUpdate}
          value={this.state.action}
          type='password'
          name="password"
          placeHolder='Enter Password'
          ref={this.textInput}
          
        />
         
        <button style={buttonStyle} >Submit</button>
        <button style={buttonStyle} type="button" onClick={this.modalDeleteUpdate}>Cancel</button>
      </form>
     
     
    );
  }
}

export default ModalDelete;