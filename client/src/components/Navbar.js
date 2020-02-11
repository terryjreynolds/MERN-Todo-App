import React, { Component } from "react";
import { Link } from 'react-router-dom';
import DropDownMenu from "./DropDownMenu";


class Navbar extends Component {

  constructor(props) {
    super(props);
this.state = {
  url: '',
  showSignUp: true
};
  
    
  }



handleClick = (url, showSignUp) => {
  this.setState({
    url: url
  });
  
}
  render() {
const userLoggedIn = this.props.userAuthState.loggedIn;

    return (
        <div className="navbar"> 
       
            <h1>The Obligatory ToDo App
           
            </h1>
            
            <div className="navLinksWrapper">
            <Link to="/"><div onClick={ () => this.handleClick('/') } className="navItems">Home</div></Link>
            <Link to="/register"><div onClick={ () => this.handleClick('/register')} className={ this.props.userAuthState.loggedIn ? 'signUpHidden' : "navItems"}>SignUp</div></Link>
        <Link to="/login"> <div onClick={ () => this.handleClick('/login') } className="navItems" style={ this.state.url === "/login"  ? {display: 'none'} : {display: 'block'}}>Login</div></Link>
        <span style= { userLoggedIn ? { display:'block' } : { display: 'none'}}><DropDownMenu userLoggedIn = { this.props.userAuthState } setUserState = { this.props.setUserState }/></span>
        </div>
      </div>
    );
  }
}

export default Navbar;