import React from "react";
import axios from "axios";
import { Redirect } from 'react-router';

const buttonStyle = {
  display: 'block',
  margin: '1vw'
};

const inputStyle = {
  margin: '1vw'
};



class Login extends React.Component {


  constructor(props) {
    super(props);
   
    this.state = {
      
      username: "",
      password: "",
      toHome: false,
      sessionUserName: ''
        
    };

    axios.defaults.withCredentials = true;
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

      if(res.data.username) {
        console.log('fullresponse', res);
        console.log('response', res.data.username);
        self.setState({sessionUserName: res.data.username
          
        });
       
        self.setState({toHome: true});
      } else {
        console.log('error', res.data);
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
      <input style= {inputStyle} placeholder='username'  id='username' onChange={this.handleChange} value={this.state.username} name='username' type='text'   />
        <input style= {inputStyle}  placeholder='password ' id='password'  onChange={this.handleChange} value={this.state.password} name='password' type='password'    />
        <button style={buttonStyle} type='submit'>Submit</button>
      </form>
      </div>
    );
  }
}

export default Login;