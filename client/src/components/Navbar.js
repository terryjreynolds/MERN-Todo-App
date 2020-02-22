import React, { Component } from "react";
import { Link } from 'react-router-dom';
import DropDownMenu from "./DropDownMenu";
import ModalDelete from './ModalDelete';

class Navbar extends Component {

  constructor(props) {
    super(props);

this.state = {
  url: '/',
  showModalDelete: false
};
     
  }

setUrlState = (url) => {
  this.setState({
    url: url
  })
}

setShowModalDeleteState = (modalState) => {
  ('im in setShowModalDeleteState');
  this.setState({
    showModalDelete: modalState
  });
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
       
            <h1>Todo           
            </h1>
            
            <div className="navLinksWrapper">
             <Link to="/" style={{ textDecoration: 'none' }}><div onClick={ () => this.handleClick('/') } className="navItems">Home</div></Link> 
            {this.state.url === "/" && this.props.userAuthState.loggedIn === false ? <Link to="/register" style={{ textDecoration: 'none' }}><div onClick={ () => this.handleClick('/register')} className="navItems" >SignUp</div></Link> : null}
       { this.state.url === "/" && this.props.userAuthState.loggedIn === false ? <Link to="/login" style={{ textDecoration: 'none' }}> <div onClick={ () => this.handleClick('/login') } className="navItems" >Login</div></Link> : null}
        { this.props.userAuthState.loggedIn ? <span><DropDownMenu setShowModalDeleteState={this.setShowModalDeleteState} userLoggedIn = { this.props.userAuthState.loggedIn } setUserState = { this.props.setUserState } setUrlState = { this.setUrlState}/></span> : null}
        </div>
        <ModalDelete setUserState = { this.props.setUserState } setUrlState = { this.setUrlState} setShowModalDeleteState ={ this.setShowModalDeleteState } showModalDelete={this.state.showModalDelete}/>
      </div>
    );
  }
}

export default Navbar;