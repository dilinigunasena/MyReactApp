/**
 * @author [Dilini Gunasena]
 * @email [dilini@omobio.net]
 * @create date 2018-09-05 02:46:13
 * @modify date 2018-09-05 02:46:13
 * @desc [description]
*/
import React, { Component } from 'react';
import { Button, Form,FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
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
    this.state = {
      username:"",
      password:""
    }
    this.doLogin = this.doLogin.bind(this); 
    this.handleChange = this.handleChange.bind(this);   
    this.goDash = this.goDash.bind(this);    
  }

  handleChange(event){
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  doLogin(){
    console.log('UN',this.state.username);
    console.log('PWD',this.state.password);
    if((this.state.username.length===0) || (this.state.password.length===0)){
      console.log('invalid username & password');
    }else{
      console.log('calling Login');
      // Without API
      this.goDash();
      // Integrate API - // TODO: Uncomment the below commented lines     
      /*
      var loginUrl = "http://192.168.0.253/dialog/zodiac/dev/bizlogic/web/index.php?r=api/authnz";      
      var params = {
            "username":this.state.username,
            "password":this.state.password
      }
      const formData = new FormData();
      for (let k in params) {
          formData.append(k, params[k]);
      }axios({
        method: 'post',
        url: loginUrl,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        data: formData
      }).then((response) => {
        console.log('---res---',response);
        if(response.status===200){
          if(response.data.success){
            console.log('---success---',response.data.success);
            this.goDash();
          }else{
            console.log('---res data---',response.data);
          }
        }else{
          console.log('---res status---',response.status);
        }
      });
      */
    }
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
          value={this.state.username}
          onChange={this.handleChange}             
        />
      </FormGroup>
      <FormGroup controlId="password">
        <FormControl
          className="login-input"
          type="password"          
          placeholder="Password"
          required="true"
          autoFocus="true"
          value={this.state.password}
          onChange={this.handleChange}            
        />
      </FormGroup>
      <FormGroup controlId="button">
        <Button className="login-button" onClick={this.doLogin}>LOGIN</Button>
      </FormGroup>
    </Form>
    </div>    
    </Router>    
  );
}
}
export default Login;







