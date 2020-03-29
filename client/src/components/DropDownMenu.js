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
          <div className="menuWrapper">
            <ul
              className="dropDownMenu"
              ref={element => {
                this.dropdownMenu = element;
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/profile">
                <button className="listButtons" onClick={this.closeMenu}>
                  Profile
                </button>{" "}
              </Link>
              <Link style={{ textDecoration: "none" }} to="/passwordChange">
                <button className="listButtons" onClick={this.closeMenu}>
                  Change Password
                </button>{" "}
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <button className="listButtons" onClick={this.handleClick}>
                  {" "}
                  Delete Account
                </button>
              </Link>
              <button className="listButtons" onClick={this.handleLogout}>
                Logout
              </button>{" "}
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

export default DropDownMenu;
