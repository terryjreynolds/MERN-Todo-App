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
    url: url,
    showSignUp: showSignUp
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
        <Link to="/login"> <div onClick={ () => this.handleClick('/login') } className={ this.state.url === "/login"  ? "navItemsHidden" : this.state.url === "/" && this.props.userAuthState.loggedIn ? "navItemsHidden" : "navItems"} >Login</div></Link>
        <span style= { userLoggedIn ? { display:'block' } : { display: 'none'}}><DropDownMenu userLoggedIn = { this.props.userAuthState.loggedIn } setUserState = { this.props.setUserState } setUrlState = { this.handleClick }/></span>
        </div>
      </div>
    );
  }
}

export default Navbar;