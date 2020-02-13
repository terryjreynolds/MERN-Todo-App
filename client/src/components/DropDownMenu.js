
import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom';

class DropDownMenu extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
      logoutPath: ''
      
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
           this.setState({
            logoutPath: '/'
           });
           
        }
      })
     
      .catch(err => console.log(err));
       
      };

      handleDelete = ()=> {
        //TODO: this should use the session id or username to search the db
        //using some mongoose method such as findOneAndDelete. returning success
        //to the dropdown which needs to trigger a render and redirect.
        //ideally, it should put up a card asking for password before
        //carrying out the deletion. I should be able to find the id or
        //username on req.user as it is carried along with the headers on 
        //every request while a session exists
        console.log('in handleDelete');
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
                <button onClick={ this.handleLogout } style={listItemStyle}>Logout</button>
                <button onClick ={ this.handleDelete } style={listItemStyle}> Delete Acc</button>
               
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