import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import axiosWithAuth from "./helpers/axiosWithAuth";
import history from "./helpers/history";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from './components/BubblePage';
import "./styles.scss";

function App() {

  const onLogout = (props)=> {
    console.log("LOGOUT")
    axiosWithAuth().post('/logout')
      .then(res => {
        localStorage.removeItem("token")
        history.push('/login')
      })
      .catch(err => {
        console.log(err)
      })

  }
        // axiosWithAuth()
        //     .post('/logout')
        //     .then(res => {
        //       localStorage.removeItem("token");
        //       history.push('/login');
        //     }).catch(err=> {
        //         console.log(err);
        //     });


  return (
    <Router history={history}>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#" onClick={onLogout}>logout</a>
        </header>

        <Switch>

          <PrivateRoute exact path="/bubbles" component={BubblePage}/>  
          <Route path="/login" component={Login}/>
          <Route path="/" component={Login}/>
  
        </Switch>
      </div>
    </Router>
  );
}





export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.