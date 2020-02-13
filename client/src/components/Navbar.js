import React, { Component } from "react";
import { Link } from 'react-router-dom';
import DropDownMenu from "./DropDownMenu";


class Navbar extends Component {

  constructor(props) {
    super(props);
this.state = {
  url: '/'
};
  
    
  }

setUrlState = (url) => {
  this.setState({
    url: url
  })
}

handleClick = (url, showSignUp) => {
  this.setState({
    url: url
  });
  
}
  render() {
console.log('rendering Navbar');

    return (
        <div className="navbar"> 
       
            <h1>The Obligatory ToDo App
           
            </h1>
            
            <div className="navLinksWrapper">
             <Link to="/"><div onClick={ () => this.handleClick('/') } className="navItems">Home</div></Link> 
            {this.state.url === "/" && this.props.userAuthState.loggedIn === false ? <Link to="/register"><div onClick={ () => this.handleClick('/register')} className="navItems" >SignUp</div></Link> : null}
       { this.state.url === "/" && this.props.userAuthState.loggedIn === false ? <Link to="/login"> <div onClick={ () => this.handleClick('/login') } className="navItems" >Login</div></Link> : null}
        { this.props.userAuthState.loggedIn ? <span><DropDownMenu userLoggedIn = { this.props.userAuthState.loggedIn } setUserState = { this.props.setUserState } setUrlState = { this.setUrlState}/></span> : null}
        </div>
      </div>
    );
  }
}

export default Navbar;