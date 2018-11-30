import React, { Component } from 'react';
// imported APP LOGO image
import logo from './logo.svg';

// imported CSS file
import './App.css'; 

//imported JSX from react-router-dom 
import {
  Router,   
  Route
} from "react-router-dom";

//imported JS files
import History from './utils/History.js'; 
import Login from './components/Login.js'; 
import Dashboard from './components/Dashboard'; 

class App extends Component {
  render() {
    return (
      <Router history={History}>
      <div className="main-grid-container">          
          <div className="app-header">
            <div className="app-logo"><img src={logo} className="default-logo" alt="logo" /></div>
            <div className="app-title">App Tittle</div>
          </div>          
          <div className="login-container">            
            <Route exact path="/" component={Login}/>
          </div>
          <div className="main-container">
            <Route path="/dashboard" component={Dashboard}/>
          </div>
          <div className="app-footer">&copy; Footer</div>
        </div>
      </Router>
      
    );
  }
}

export default App;