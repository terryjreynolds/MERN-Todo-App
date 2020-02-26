import React from "react";
import axios from "axios";
import { Redirect } from 'react-router';


class Register extends React.Component {

  constructor(props) {
    super(props);

  //create reference on name input field
this.textInput = React.createRef();

    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      confirm: "",
      displayFlashMsg: false,
      msg: "hi",
      toLogin: false
    };


  }

componentDidMount() {
  //setting focus on name input field
  this.textInput.current.focus();
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
    axios.post ('/users/register', {
      
        name: data.get('name'),
        username: data.get('username'),
        email: data.get('email'),
        password: data.get('password'),
        password2: data.get('confirm')
    })
.then(function (res) {
  console.log('response', res);
 
  if((res.data).hasOwnProperty('errors')) {
     //load the msg property into a variable
  //push msgs to an array. 
  //push params to an array
  //flash the individual messages 1.5 seconds apart
  //use params to empty fields.
 let errors = res.data.errors;

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
    displayFlashMsg: true,
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
    if(param === 'password') {
      self.setState({
        displayFlashMsg: false,
        [param]: '',
       confirm: ''
      });
    } else {
      self.setState({
        displayFlashMsg: false,
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
      displayFlashMsg: true,
      msg: res.data.success
    });
  
    setTimeout(function() {
      
      self.setState({
      displayFlashMsg: false,
      msg: "",
      toLogin: true
    });
    
    }, 1800);
  }
 
  
});
        
}   
        
  render() {
    console.log('rendering Register');
    //conditionally rendering the login page
    if (this.state.toLogin === true) {
      return <Redirect to='/login' />
    }

    const buttonStyle = {
      textAlign: 'left',
         marginLeft: '4vw'
       };
   
       const headingStyle = {
         display: 'inline',
         textAlign: 'left',
            marginLeft: '4.8vw'
          };

    const inputStyle = {
      margin: '1vw'
    };

    return (
      <div className='slideIn'> 
      <div style={headingStyle}><h2 >To-Do Sign Up</h2></div>
      <h5 className={this.state.msg === 'Registration Successful' ? 'displayFlashSuccess' : this.state.displayFlashMsg ? 'displayFlash' : 'hideFlash'}
      
      >{this.state.msg}</h5>
      <form style={{textAlign: 'center'}} onSubmit={this.handleSubmit}>   
      <input ref={this.textInput} style= {inputStyle} placeholder="name"  id='name' onChange={this.handleChange}  value={this.state.name} name='name' type='text'   />
        <input style= {inputStyle}  placeholder="email"  id='email' onChange={this.handleChange}  value={this.state.email} name='email' type='text'    />
        <input style= {inputStyle} placeholder='username'  id='username' onChange={this.handleChange} value={this.state.username} name='username' type='text'   />
        <input style= {inputStyle}  placeholder='password ' id='password'  onChange={this.handleChange} value={this.state.password} name='password' type='password'    />
        <input style= {inputStyle} placeholder="confirm password"  id='password2'  onChange={this.handleChange} value={this.state.confirm} name='confirm' type='password'     />
        
        <div style= {buttonStyle} ><button  type='submit' >Submit</button></div>
      </form>
      </div>
           
    );
  }
}

export default Register;
