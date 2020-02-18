import React from "react";
// import axios from "axios";
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
      passwordVerified: false
    }
  }

componentDidMount() {
  //setting focus on name input field
  if(this.state.passwordVerified) {
      this.textInputTwo.current.focus();
  } else {
    this.textInput.current.focus();
  }
   
}
componentDidUpdate() {
    if(this.state.passwordVerified) {
        this.textInputTwo.current.focus();
    } else {
      this.textInput.current.focus();
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

 //handles save if userVerified is false
 verifyCurrentPassword = (e) => {
     e.preventDefault();
console.log('in verifyCurrentPassword');
this.setState({
    passwordVerified: true
})
 }

 //handles save button if userVerified is true
 changePassword = (e) => {

    e.preventDefault();
     console.log('in changePassword');
     this.setState({
        passwordVerified: false
    })
     
    //  // const data = new FormData(e.target);      
    //  console.log("im in handle change password submit");
    
    //  axios
    //    .put(
    //      `/users/profile/${this.state.id}/${this.state.name}/${
    //        this.state.email
    //      }/${this.state.username}`
    //    )
    //    .then(res => {
    //      if (res) {
    //        console.log("send Profile resdata", res);        
    //        this.setState({
    //            userUpdated: true               
    //        })
    //      }
    //    })
    //    .catch(err => console.log(err));
 }



  //uses history api riding on props to go back to todo.js 
  goBack = (e) => {
      e.preventDefault();
      this.props.history.goBack();
  }

  render() {
    console.log('rendering Profile');
     //conditionally rendering the Todo page
     if (this.state.userUpdated) {
        return <Redirect to={{
          pathname: '/Todo',
          state: { username: this.state.username }
      }}
  />
      }
    return (
      <div> 
      <h1>{!this.state.passwordVerified ? "Verify Old Password" : "Provide New Password"}</h1>
      <h5 className={this.state.msg === 'Registration Successful' ? 'displayFlashSuccess' : this.state.displayFlashMsg ? 'displayFlash' : 'hideFlash'}
      
      >{this.state.msg}</h5>
      <form onSubmit={this.state.passwordVerified ? this.changePassword : this.verifyCurrentPassword}>   
      <input className={!this.state.passwordVerified ? "showModal" : "hideModal"} ref={this.textInput} style= {inputStyle} placeholder="Enter Old Password"  id='name' onChange={this.handleChange}  name='oldPassword' type='text'   />
      <input className={this.state.passwordVerified ? "showModal" : "hideModal"} ref={this.textInputTwo} style= {inputStyle}  placeholder='password ' id='password'  onChange={this.handleChange} value={this.state.password} name='password' type='password'    />
        <input className={this.state.passwordVerified ? "showModal" : "hideModal"} style= {inputStyle} placeholder="confirm password"  id='password2'  onChange={this.handleChange} value={this.state.confirm} name='confirm' type='password'     />
        <button  style= {buttonStyle} type='submit' >Submit</button>
         <button onClick={this.goBack} style= {buttonStyle}>Cancel</button>
      </form>
      </div>
     
      
    );
  }
}

export default PasswordChange;
