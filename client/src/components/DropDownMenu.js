
import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

class DropDownMenu extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
      logoutPath: '',     
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  

  showMenu(event) {
    console.log('inshowMenu');
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    console.log('incloseMenu');
    
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    
  }
  getAccountProfile = () => {
    console.log('in getAccountProfile');
  }

  handleLogout = () => { 
    
      //hit the logout endpoint
      axios
      .post(`/users/logout`)
      .then(res => {
        if (res.data) {
          console.log('redirectobj', res.data.redirect);               
           this.setState({
            logoutPath: '/'
           });
           
        }
      })
     
      .catch(err => console.log(err));
       
      };

      handleClick= (e) => {
        e.preventDefault();
        console.log('in handleDelete');
        this.props.setShowModalDeleteState(true);   
      }
      
  render() {
    console.log('rendering DropDown');
    if(this.state.logoutPath === '/') {
        this.setState({
          logoutPath: ''
        });
        this.props.setUserState(false);
        this.props.setUrlState('/')
      return <Redirect to={{
        pathname: 
        '/'
        }}
        
    />
    }
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
              <Link to="/profile"><button onClick={this.closeMenu}style={listItemStyle}>Profile</button> </Link>
              <Link to="/passwordChange"><button onClick={this.closeMenu}style={listItemStyle}>Change Password</button> </Link>
              <button onClick ={ this.handleClick } style={listItemStyle}> Delete Account</button>
                <button onClick={ this.handleLogout } style={listItemStyle}>Logout</button>
                
               
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