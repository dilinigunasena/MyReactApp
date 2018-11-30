/**
 * @author [Dilini Gunasena]
 * @email [dilini@omobio.net]
 * @create date 2018-09-05 02:43:31
 * @modify date 2018-09-05 02:43:31
 * @desc [description]
*/
import React, { Component } from 'react';

//imported ICON images 
import usericon from "../resources/icons/user.png";
import setupicon from "../resources/icons/setup.png";
import reporticon from "../resources/icons/report.png";
import thumbicon from "../resources/icons/thumbs.png";

//imported CSS files
import "../App.css";    
import "../css/custom.css"; 

//imported JSX from react-router-dom 
import {
  HashRouter,
  NavLink,   
  Route  
} from "react-router-dom";

//imported JS files
import EndUser from './EndUser.js'
import Setup from './Setup.js'  
import Reports from './Reports.js'
import Preferences from './Preferences.js'


class Dashboard extends Component {
  render() {    
    return (
      <HashRouter>
       <div className="flex-container">
       <ul>       
          <li><NavLink to="/enduser"><img src={usericon} className="dashboard-icons" alt="search"/> End User </NavLink></li>           
          <li><NavLink to="/setup"><img src={setupicon} className="dashboard-icons" alt="load" /> SetUp </NavLink></li>
          <li><NavLink to="/reports"><img src={reporticon} className="dashboard-icons" alt="upload"/> Reports </NavLink></li>
          <li><NavLink to="/preferences"><img src={thumbicon} className="dashboard-icons" alt="report"/> Preferences </NavLink></li>
       </ul>
        <div>
          <Route path="/enduser" component={EndUser}/> 
          <Route path="/setup" component={Setup}/>
          <Route path="/reports" component={Reports}/>
          <Route path="/preferences" component={Preferences}/>
        </div>
       </div>
      </HashRouter>
    );  
  }
}
export default Dashboard;