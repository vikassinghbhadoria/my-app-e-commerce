import React, { Component } from "react";
// import { Route, Routes, Switch } from "react-router";
// import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

import MainContent from "./CustomersList";
import Navbar from "./Navbar";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import Error from "./Error";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  render() {
    return (
      <Router>
        <Navbar isLoggedIn={this.state.isLoggedIn} />
        <div className="container-fluid">
          <Routes>
            <Route
              exact
              path="/"
              render={(props) => (
                <Login
                  {...props}
                  updateIsLoggedInStatus={this.updateIsLoggedInStatus}
                />
              )}
            ></Route>
            {/* <Route exact path="/" element={<Login />}> */}
              <Route exact path="/customers" element={<MainContent />}> </Route>
                <Route exact path="/cart" element={<ShoppingCart />}></Route>
                  <Route exact path="*" element={<Error />}></Route>  </Routes>
                
             
            
        
        </div>
      </Router>
    );
  }

  // this methoid can be called by  child compnenet to update isLoggedIn property of  the state
  updateIsLoggedInStatus = (status) => {
    this.setState({ isLoggedIn: status });
  };
}
