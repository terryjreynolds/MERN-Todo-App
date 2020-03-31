import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class DropDownMenu extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      logoutPath: ""
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    console.log("inshowMenu");
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    console.log("incloseMenu");

    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  }
  getAccountProfile = () => {
    console.log("in getAccountProfile");
  };

  handleLogout = () => {
    //hit the logout endpoint
    axios
      .post(`/users/logout`)
      .then(res => {
        if (res.data) {
          console.log("redirectobj", res.data.redirect);
          this.setState({
            logoutPath: "/"
          });
        }
      })

      .catch(err => console.log(err));
  };

  handleClick = e => {
    e.preventDefault();
    console.log("in handleDelete");
    this.props.setShowModalDeleteState(true);
  };

  render() {
    console.log("rendering DropDown");
    if (this.state.logoutPath === "/") {
      this.setState({
        logoutPath: ""
      });
      this.props.setUserState(false);
      this.props.setUrlState("/");
      return (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      );
    }

    return (
      <div>
        <div className="dropDownButton" onClick={this.showMenu}>
          Account
        </div>

        {this.state.showMenu ? (
          <nav role="navigation" className="menuWrapper">
            <ul
              className="dropDownMenu"
              ref={element => {
                this.dropdownMenu = element;
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/profile">
                <li onClick={this.closeMenu}>Profile</li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/passwordChange">
                <li onClick={this.closeMenu}>Change Password</li>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <li onClick={this.handleClick}>Delete Account</li>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <div id="line"></div>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <li id="logout" onClick={this.handleLogout}>
                  Logout
                </li>
              </Link>
            </ul>
          </nav>
        ) : null}
      </div>
    );
  }
}

export default DropDownMenu;
