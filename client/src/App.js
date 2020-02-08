import React from "react";

import Todo from "./components/Todo";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
      <Switch>
<Route exact path='/' component={Todo} />
<Route path='/register' component={Register} />
<Route path='/login' component={Login} />

      </Switch>
      
    </div>
    </BrowserRouter>
  );
};

export default App;
