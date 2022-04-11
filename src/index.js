import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/index.css';
import './css/Navbar.css'

import Navbar from './html/Navbar';
import App from './html/App';

import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
  <Navbar></Navbar>
  <App></App>
  </React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
