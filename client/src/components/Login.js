import React from "react";
import axios from "axios";
import { Redirect } from 'react-router';



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
//made lifecycle methods here conditional on focus being defined. Why? When 
//user login was successful an error would throw because focus was undefined
  componentDidMount(){
    console.log('componentDidMount Login');
    let focus = this.loginInput.current;
    console.log('focus', focus);
    if(focus) {
      console.log('doing focus');
      this.loginInput.current.focus();
    }  
  };

  componentDidUpdate() {
    console.log('componentDidUpdate Login');
   let focus = this.loginInput.current;
   let focusPw = this.passwordInput.current;
   if(focus || focusPw){
    if(this.state.cursorInUser) {
      this.loginInput.current.focus();
    } else {
      this.passwordInput.current.focus();
    }
   }
   
  };

  //when user inputs text, it controls where the cursor will be
  toggleInUser = () => {
    if(this.cursorInUser) {
      this.setState({
        cursorInUser: false
      });
    } else if(this.cursorInUser){
      this.setState({
        cursorInUser: true
      });
    }
  }

 handleChange = (e) => {
  console.log('e', e.target.name);
   const target = e.target;
   const value = target.value
   const name = target.name;
if(e.target.name === 'username') {
  this.setState({
    [name]: value,
    cursorInUser: true
       });
}else {
  this.setState({
    [name]: value,
    cursorInUser: false
  });
}
 
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

      }
      
      
    })
  }

  render() {
    
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
    console.log('rendering Login');

    const buttonStyle = {
   textAlign: 'left',
      marginLeft: '4vw'
    };

    const headingStyle = {
      textAlign: 'left',
         marginLeft: '4.8vw'
       };
    
    const inputStyle = {
      margin: '1vw'
    }
      
    return (
        <div  className='slideIn'> 
         
      <form  style={{textAlign: 'center'}} onSubmit={this.handleSubmit}>
        <div style={headingStyle}><h2>To-Do Login</h2> </div>
      
      <h5 className={this.state.displayFlashMsg ? 'displayFlash' : 'hideFlash'}     
      >{this.state.msg}</h5>
      <input ref={this.loginInput} style= {inputStyle} placeholder='username'  id='username' onClick={this.toggleInUser} onChange={this.handleChange} value={this.state.username} name='username' type='text'   />
        <input ref={this.passwordInput} style= {inputStyle}  placeholder='password ' id='password' onClick={this.toggleInUser} onChange={this.handleChange} value={this.state.password} name='password' type='password'    />
        <div style= {buttonStyle} ><button  type='submit'>Submit</button></div>
      </form>
      </div>
    );
  }
}

export default Login;