import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
// import { Redirect } from 'react-router';

class Navbar extends Component {

  constructor(props) {
    super(props);
this.state = {
  url: "/login"
};
   

    
  }



  handleLogout = () => {

if(this.props.userAuthState.loggedIn) {
  
  
  //hit the logout endpoint
  axios
  .post(`/users/logout`)
  .then(res => {
    if (res.data) {
      console.log('logout msg', res.data);
      this.props.setUserState(false);
      
      console.log('revisedloggedin', this.props.userAuthState.loggedIn);
      
    }
  })
  .catch(err => console.log(err));
}

  
  };

 

  render() {
    return (
        <div className="navbar"> 
            <h1>The Obligatory ToDo App
           
            </h1>
            <div className="navLinksWrapper">
            <Link to="/"><div className="navItems">Home</div></Link>
            <Link to="/register"><div className="navItems">SignUp</div></Link>
        <Link to="/login"> <div onClick={ this.handleLogout } className="navItems">{this.props.userAuthState.loggedIn ? 'Logout' : 'Login' }</div></Link>
        </div>
      </div>
    );
  }
}

export default Navbar;