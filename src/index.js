import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { CurrentUserProvider } from './context/CurrentUserContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CurrentUserProvider>
    <App/>
    </CurrentUserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);