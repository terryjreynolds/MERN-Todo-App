import React from "react";
import axios from "axios";
import { Redirect } from 'react-router';

const buttonStyle = {
  
  margin: '1vw'
};

const inputStyle = {
  margin: '1vw'
};

class Login extends React.Component {


  constructor(props) {
    super(props);
 
    //create a ref for username field on login form
this.loginInput = React.createRef();
this.passwordInput = React.createRef();
    this.state = {
      
      username: "",
      password: "",
      toHome: false,
      sessionUserName: '',
      displayFlashMsg: false,
      msg: '',
      cursorInUser: true
        
    };

    axios.defaults.withCredentials = true;
  }

  componentDidMount(){
    if(this.state.cursorInUser) {
      this.loginInput.current.focus();
    }else {
this.passwordInput.current.focus();
    }
    
  }
  componentDidUpdate() {
    if(this.state.cursorInUser) {
      this.loginInput.current.focus();
    }else {
      this.passwordInput.current.focus();
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


  handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const self = this;
  
    axios.post ('/users/login', {
          
        username: data.get('username'), 
        password: data.get('password')
        
    })
    .then(function (res) {
      //this method only receives the msg string back-three posibiliities
      //missing credentials, user not found  wrong password
console.log('completeRes', res.data);
      if(res.data.username) {
        console.log('fullresponse', res);
        console.log('response', res.data.username);
        self.setState({sessionUserName: res.data.username
          
        });
       
        self.setState({toHome: true});
      } else {
        
        self.setState({
          msg: res.data,
          displayFlashMsg: true
        });
      }

      let errorMsg = res.data
        console.log('errorMsg', errorMsg);
      
      if(errorMsg === 'Missing credentials' || errorMsg === 'No user found') {

        setTimeout(function() {
      
          self.setState({
          displayFlashMsg: false,
          msg: "",
          username: '',
          password: '',
          cursorInUser: true
        });
        
        }, 1500);


      } else {
        setTimeout(function() {
      
          self.setState({
          displayFlashMsg: false,
          msg: "",
          password: '',
          cursorInUser: false
        });
        
        }, 1500);
//immediately reset cursorInUser to remount
        // setTimeout(function() {
      
        //   self.setState({
        //   cursorInUser: true
        // });
        
        // }, 1500);
      }
      
      
    })
  }

  render() {
    console.log('rendering Login');
    //conditionally rendering the home page
    // const name = this.state.sessionUserName;
    //Also, using a function passed from app.js to update its loggedIn state
    if (this.state.toHome === true) {
      this.props.setUserState(true);
      return <Redirect to={{
        pathname: '/Todo',
        state: { username: this.state.sessionUserName }
    }}
/>
    }
    return (
        <div> 
            
      <form onSubmit={this.handleSubmit}>
      <h1 style={buttonStyle}>To-Do Login</h1>
      <h5 className={this.state.displayFlashMsg ? 'displayFlash' : 'hideFlash'}     
      >{this.state.msg}</h5>
      <input ref={this.loginInput} style= {inputStyle} placeholder='username'  id='username' onChange={this.handleChange} value={this.state.username} name='username' type='text'   />
        <input ref={this.passwordInput} style= {inputStyle}  placeholder='password ' id='password'  onChange={this.handleChange} value={this.state.password} name='password' type='password'    />
        <button style={buttonStyle} type='submit'>Submit</button>
      </form>
      </div>
    );
  }
}

export default Login;