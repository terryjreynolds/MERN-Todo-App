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


class Profile extends React.Component {

  constructor(props) {
    super(props);

  //create reference on name input field
this.textInput = React.createRef();

    this.state = {
        id: '',
      name: "",
      email: "",
      username: "",     
      password: "",
      confirm:  '',
      userUpdated: false,
      sessionUserName: "" 
    }
  }

componentDidMount() {
  //setting focus on name input field
  this.textInput.current.focus();
  this.populateProfileFields();
}

populateProfileFields = () => {
    console.log('in populateProfileFields');

    axios
    .get("/users/profile")
    .then(res => {
      if (res.data) {
        console.log("resdata", res);
        this.setState({
            id: res.data._id,
          name: res.data.name,
          email: res.data.email,
          username: res.data.username
        });
      }else {
        console.log('nothing');
      }
    })
    .catch(err => console.log(err));
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
 
 //handles save button
  handleSubmit = (e) => {     
    e.preventDefault();
    // const data = new FormData(e.target);      
    console.log("im in handle save");
   
    axios
      .put(
        `/users/profile/${this.state.id}/${this.state.name}/${
          this.state.email
        }/${this.state.username}`
      )
      .then(res => {
        if (res) {
          console.log("send Profile resdata", res);        
          this.setState({
              userUpdated: true               
          })
        }
      })
      .catch(err => console.log(err));
  };
   
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
      <h1>Account Profile</h1>
      <h5 className={this.state.msg === 'Registration Successful' ? 'displayFlashSuccess' : this.state.displayFlashMsg ? 'displayFlash' : 'hideFlash'}
      
      >{this.state.msg}</h5>
      <form onSubmit={this.handleSubmit}> 
      <label for="name">First name:</label>  
      <input ref={this.textInput} id='name' style= {inputStyle} placeholder="name" onChange={this.handleChange}  value={this.state.name} name='name' type='text'   />
      <label for="email">Email:</label>
        <input style= {inputStyle} id='email'  placeholder="email" onChange={this.handleChange}  value={this.state.email} name='email' type='text'    />
        <label for="username">Username:</label>
        <input style= {inputStyle} id='username'  placeholder='username' onChange={this.handleChange} value={this.state.username} name='username' type='text' />      
        <button  style= {buttonStyle} type='submit' >Save</button>
         <button onClick={this.goBack} style= {buttonStyle}>Cancel</button>
      </form>
      </div>
     
      
    );
  }
}

export default Profile;
