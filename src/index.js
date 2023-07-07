import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from 'App';
import 'styles/global/global.css';

fetch('https://api.ipify.org/?format=json')
  .then((response) => response.json())
  .then((data) => {
    const ipAddress = data.ip;
    console.log('IP address:', ipAddress);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>,
);