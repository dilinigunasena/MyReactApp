/**
 * @author [Dilini Gunasena]
 * @email [dilini@omobio.net]
 * @create date 2018-09-05 02:43:31
 * @modify date 2018-09-05 02:43:31
 * @desc [description]
*/
import React, { Component } from 'react';

//imported ICON images
import searchicon from "../resources/icons/search.png";
import downloadicon from "../resources/icons/download.png";
import uploadicon from "../resources/icons/upload.png";
import reporticon from "../resources/icons/report.png";

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
import Download from '../pages/Download.js' 
import Reports from '../pages/Reports.js' 
import Search from '../pages/Search.js' 
import Upload from '../pages/Upload.js'


class Dashboard extends Component {
  render() {
    return (
      <HashRouter>
       <div className="flex-container">
        <ul>
          <li><NavLink to="/search"><img src={searchicon} className="dashboard-icons" alt="search"/> Search</NavLink></li>
          <li><NavLink to="/download"><img src={downloadicon} className="dashboard-icons" alt="load" />Download</NavLink></li>
          <li><NavLink to="/upload"><img src={uploadicon} className="dashboard-icons" alt="upload"/>Upload</NavLink></li>
          <li><NavLink to="/report"><img src={reporticon} className="dashboard-icons" alt="report"/>Reports</NavLink></li>
        </ul>
        <div>
          <Route  path="/search" component={Search}/> 
          <Route path="/download" component={Download}/>
          <Route path="/upload" component={Upload}/>
          <Route path="/report" component={Reports}/>
        </div>
       </div>
      </HashRouter>

      

    );
  }
}

export default Dashboard;