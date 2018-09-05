import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import History from './utils/History.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Router history={History}><App/></Router>, document.getElementById('root'));
registerServiceWorker();
