
import React, { Component } from "react";
import Todo from "./components/Todo";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from './components/Navbar';


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
});

  }
  
 render() {
    
    
    return (
    
    <BrowserRouter>
    <Navbar userAuthState= { this.state } setUserState = { this.setUserState }/>
    <div  className="App">
      <Switch>
<Route exact path='/' component={Todo} />
<Route path='/register' component={Register} />
<Route path='/login' render={(props) => <Login {...props} setUserState={ this.setUserState } userAuthState= {this.state.loggedIn}/>} />

      </Switch>
      
    </div>
    </BrowserRouter>
  );
  }
};

export default App;
