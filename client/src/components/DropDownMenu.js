
import React, { Component } from 'react';
import axios from "axios";

class DropDownMenu extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  handleLogout = () => { 
    
      //hit the logout endpoint
      axios
      .post(`/users/logout`)
      .then(res => {
        if (res.data) {
          console.log('redirectobj', res.data.redirect);
          this.props.setUserState(false);
             window.location = res.data.redirect; 
        }
      })
     
      .catch(err => console.log(err));
    
    
      };
  render() {

    const listItemStyle = {
        display: 'block',
        fontSize: 'calc(5px + (3 + 8) * ((100vw - 300px) / (1600 - 300)))'
      };

    return (
      <div>
        <div className="dropDownButton" onClick={this.showMenu}>
          Account
        </div>
        
        {
          this.state.showMenu
            ? (
                <div className="menuWrapper">
              <ul
                className="dropDownMenu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button onClick={ this.handleLogout }style={listItemStyle}>Logout</button>
                <button style={listItemStyle}> Delete Acc</button>
               
              </ul>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default DropDownMenu;