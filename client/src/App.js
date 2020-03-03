
import React, { Component } from "react";
import Todo from "./components/Todo";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Footer from "./components/Footer";
import PasswordChange from "./components/PasswordChange";

class App extends Component{

  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
     };

     this.setUserState = this.setUserState.bind(this);
  }
 

  setUserState(userState) {
this.setState({
  loggedIn: userState 
})

  }
  
 
 render() {
    console.log('rendering Appjs');
  
    return (
    
    <BrowserRouter>
    <Navbar userAuthState= { this.state } setUserState = { this.setUserState }/>
    <div  className="App">
      <Switch>
      <Route exact path='/' component={Dashboard} />
<Route path='/Todo' component={Todo} />
<Route path='/register' component={Register} />
<Route path='/login' render={(props) => <Login {...props} setUserState={ this.setUserState } userAuthState= {this.state.loggedIn}/>} />
<Route path='/profile' component={Profile} />
<Route path='/passwordChange' component={PasswordChange} />
      </Switch>
      <Footer />    
    </div>
    </BrowserRouter>
    
  );
  }
};

export default App;
