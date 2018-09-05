/**
 * @author [Dilini Gunasena]
 * @email [dilini@omobio.net]
 * @create date 2018-09-05 02:46:13
 * @modify date 2018-09-05 02:46:13
 * @desc [description]
*/
import React, { Component } from 'react';
import { Button, Form,FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//imported JSX from react-router-dom 
import {
  Router  
} from "react-router-dom";

// imported CSS files
import '../App.css';    
import "../css/custom.css"; 

//imported JS files
import History from '../utils/History.js'; //History

class Login extends Component {
  constructor(props){
    super(props);
    this.goDash = this.goDash.bind(this);    
  }

  goDash(){
    History.push('/dashboard');
  }

  
render() {
  return (
    <Router history={History}>
    <div className="wrapper">
    <Form>
      <FormGroup controlId="title">
        <ControlLabel className="login-form-header">WELCOME TO <b>AppTitle</b></ControlLabel>        
      </FormGroup>
      <FormGroup controlId="username">     
        <FormControl 
          className="login-input"
          type="text"          
          placeholder="User Name"
          required="true"
          autoFocus="true"          
        />
      </FormGroup>
      <FormGroup controlId="password">
        <FormControl
          className="login-input"
          type="password"          
          placeholder="Password"
          required="true"
          autoFocus="true"          
        />
      </FormGroup>
      <FormGroup controlId="button">
        <Button className="login-button" onClick={this.goDash}>LOGIN</Button>
      </FormGroup>
    </Form>
    </div>    
    </Router>    
  );
}
}
export default Login;







