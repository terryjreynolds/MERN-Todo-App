import React from "react";
import axios from "axios";
import { Redirect } from 'react-router';



const buttonStyle = {
  display: 'inline-block',
  margin: '1vw'
};

const inputStyle = {
  margin: '1vw'
};


class PasswordChange extends React.Component {

  constructor(props) {
    super(props);

  //create references on password input fields
this.textInput = React.createRef();
this.textInputTwo = React.createRef();

    this.state = {
        id: '',
      name: "",
      email: "",
      username: "",     
      password: "",
      confirm:  '',
      userUpdated: false,
      sessionUserName: "", 
      showInputFields: false,
      passwordVerified: false,
      newPassword: '',
      displayFlash: false,
      flash: ''
    }
  }

componentDidMount() {
  //setting focus on name input field

    this.textInput.current.focus();
  
   
}
componentDidUpdate() {
   if(!this.state.oldPassword && !this.state.passwordVerified) {
    this.textInput.current.focus();
   }
    if(this.state.passwordVerified && !this.state.newPassword ) {
        this.textInputTwo.current.focus();  
    }
        
}
 handleChange = (e) => {
  console.log('e', e.target.name);
   const target = e.target;
   const value = target.value
   const name = target.name;

   this.setState({
[name]: value
   });
 }

   //if the user flubs the pw input
   tryAgain = () => {
    console.log('in tryAgain');
    this.setState({     
       flash: '',
       displayFlash: false,
       oldPassword: ''
     });
  }

 //handles save button click if userVerified is false
 verifyCurrentPassword = (e) => {
     e.preventDefault();
console.log('in verifyCurrentPassword');
     const self = this;
      e.preventDefault();
      const data = new FormData(e.target);
     
      console.log('verifyCurrentPassword Data', data.get('oldPassword'));
     
       // send the password to the server for auth   
        axios
        .post('/users/authOldPassword', {
            password: data.get('oldPassword')
        })
        .then(res => {
          if (res.data.passwordVerification) {
            console.log('response', res.data.passwordVerification);
            console.log('responseid', res.data.userId);
            self.setState({
                passwordVerified: true,
                id: res.data.userId
            })

             
          }else {
            //flash error msg and reset the input field.
            
            self.setState({
              flash: 'Old password incorrect',
              displayFlash: true
             });

             setTimeout(function(){ self.tryAgain() }, 1500);
          }

        })
        .catch(err => console.log(err));
    };
 

 //handles submit button if userVerified authenticates to true
 changePassword = (e) => {

    e.preventDefault();
     console.log('in changePassword');
    
     
   const data = new FormData(e.target);      
   console.log("im in handle change password submit");
    
     axios
       .put('/users/validateNewPassword', {
        newPassword: data.get('newPassword'),
        password2: data.get('confirm')
    })
       .then(res => {
         if (res) {
           console.log("send changePassword resdata", res);        
           this.setState({
               userUpdated: true, 
               passwordVerified: false              
           })
         }
       })
       .catch(err => console.log(err));
 }



  //uses history api riding on props to go back to todo.js 
  goBack = (e) => {
      e.preventDefault();
      this.props.history.goBack();
  }

  render() {
    console.log('rendering passwordChange');
     //conditionally rendering the Todo page
     if (this.state.userUpdated) {
         this.setState({
             userUpdated: false
         })
        return <Redirect to='/login' />
      }
      
    return (
      <div> 
      <h1>{!this.state.passwordVerified ? "Verify Old Password" : "New Password"}</h1>
      
      <h5 className={this.state.displayFlash ? 'displayFlash' : 'hideFlash'}
      
      >{this.state.flash}</h5>
      <form onSubmit={this.state.passwordVerified ? this.changePassword : this.verifyCurrentPassword}>   
      <input className={!this.state.passwordVerified ? "showModal" : "hideModal"} ref={this.textInput} style= {inputStyle} placeholder="Enter Old Password"  id='name' onChange={this.handleChange} value={this.state.oldPassword} name='oldPassword' type='text'   />
      <input className={this.state.passwordVerified ? "showModal" : "hideModal"} ref={this.textInputTwo} style= {inputStyle}  placeholder='New password ' id='password'  onChange={this.handleChange} value={this.state.newPassword} name='newPassword' type='password'    />
        <input className={this.state.passwordVerified ? "showModal" : "hideModal"} style= {inputStyle} placeholder="Confirm new password"  id='password2'  onChange={this.handleChange} value={this.state.confirm} name='confirm' type='password'     />
        <button  style= {buttonStyle} type='submit' >Submit</button>
         <button onClick={this.goBack} style= {buttonStyle}>Cancel</button>
      </form>
      </div>
     
      
    );
  }
}

export default PasswordChange;
