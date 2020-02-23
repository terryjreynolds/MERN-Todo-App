import React from "react";
import axios from "axios";
import { Redirect } from 'react-router';


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
      flash: '',
      msg: 'hi',
      flashColor: ''
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
    
     const self = this;
   const data = new FormData(e.target);      
   console.log("im in handle change password submit");
    
     axios
       .put('/users/validateNewPassword', {
        newPassword: data.get('newPassword'),
        password2: data.get('confirm')
    })
       .then(res => {

           if((res.data).hasOwnProperty('errors')) {
             //same logic as used in Register component
          //load the msg property into a variable         
           //push msgs to an array. 
           //push params to an array
           //flash the individual messages 1.5 seconds apart
           //use params to empty fields.
          let errors = res.data.errors;
          //messages is the array of returned messages
          let messages = errors.map((c,i) => {
           return c.msg;
         });
         
         let params = errors.map((c,i) => {
           return c.param;
         });
         
         const delay = 1500;
          const paramDelay = messages.length * delay + 300;
         console.log(messages);
         console.log(params);
         
         //displays the flash messages
         function display(str) {
           console.log(str);
           self.setState({
             displayFlash: true,
             msg: str  
           });
         
         }
         
         //loop through the messages and pass to function that will display them
         const flashErrors = (fn, delay) => {
           return (msg, i) => {
             setTimeout(() => {
               //the function to setState
               fn(msg);
             }, i * delay);
           }
         };
         
         messages.forEach(flashErrors(display, delay));
            //use the params array to setState one time for each param
            
            function emptyFields(param) {
             if(param === 'newPassword') {
               self.setState({
                 displayFlash: false,
                 [param]: '',
                confirm: ''
               });
             } else {
               self.setState({
                 displayFlash: false,
                [param]: ''
               });
             }
             
            }
         
          setTimeout(function() {
           params.forEach(emptyFields);
          }, paramDelay) ;
             
             console.log('stateafterflash', self.state);
                 
             //if there are not errors, return success message
           } else {
             console.log('resdata', res.success);
             self.setState({
               displayFlash: true,
               msg: res.data.success,
               flashColor: 'green'
             });
           
             setTimeout(function() {
               
               self.setState({
               displayFlash: false,
               msg: "",
               toLogin: true,
               userUpdated: true,
               flashColor: '' 
            
             });
             
             }, 3000);
           }
          
         });
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
             userUpdated: false,
             passwordVerified: false 
         })
        return <Redirect to='/login' />
      }
      
      const buttonStyle = {
        display: 'inline-block',
        margin: '1vw'
      };
      
      const inputStyle = {
        margin: '1vw'
      };
      
    return (
      <div> 
      <h1 style={inputStyle}>{!this.state.passwordVerified ? "Verify Old Password" : "New Password"}</h1>
      
      <h5 className={this.state.displayFlash && this.state.flashColor === 'green' ? 'displayFlashSuccess' : this.state.displayFlash ? 'displayFlash' : 'hideFlash'}      
      >{this.state.passwordVerified ? this.state.msg : this.state.flash}</h5>
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
