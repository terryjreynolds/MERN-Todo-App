import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
        <div className="navbar"> 
            <h1>The Obligatory ToDo App
           
            </h1>
            <div className="navLinksWrapper">
            <Link to="/"><div className="navItems">Home</div></Link>
            <Link to="/register"><div className="navItems">SignUp</div></Link>
        <Link to="/login"><div className="navItems">Login</div></Link>
        </div>
      </div>
    );
  }
}

export default Navbar;