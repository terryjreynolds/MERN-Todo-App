import React from "react";
import axios from "axios";
import { Redirect } from 'react-router';


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
      const buttonStyle = {
        padding: '0',
        textAlign: 'left',
           marginLeft: '4vw'
         };

         const headingStyle = {
           display: 'inline',
           textAlign: 'left',
              marginLeft: '4.8vw'
              
            };
      
      const inputStyle = {
        margin: '1vw auto'
      };
      
      const labelStyle = {
        textAlign: 'left',
        fontSize: '1.5vw',
        marginLeft: '4.8vw'       
      };

    return (
      <div> 
      <h2 style={headingStyle}>Account Profile</h2>
      <h5 className={this.state.msg === 'Registration Successful' ? 'displayFlashSuccess' : this.state.displayFlashMsg ? 'displayFlash' : 'hideFlash'}     
      >{this.state.msg}</h5>
      <form style={{textAlign: 'center'}} onSubmit={this.handleSubmit}> 
      <label for="name" style={labelStyle}>Name:</label>  
      <input ref={this.textInput} id='name' style= {inputStyle} placeholder="name" onChange={this.handleChange}  value={this.state.name} name='name' type='text'   />
      <label for="email" style={labelStyle}>Email:</label>
        <input style= {inputStyle} id='email'  placeholder="email" onChange={this.handleChange}  value={this.state.email} name='email' type='text'    />
        <label for="username" style={labelStyle}>Username:</label>
        <input style= {inputStyle} id='username'  placeholder='username' onChange={this.handleChange} value={this.state.username} name='username' type='text' />      
        <div style={buttonStyle}><button type='submit' >Save</button>
         <button onClick={this.goBack}>Cancel</button></div>
      </form>
      </div>
     
      
    );
  }
}

export default Profile;
