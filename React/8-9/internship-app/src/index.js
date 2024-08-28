import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import getReposAsync from './getReposAsync'
// import getReposPromise from './getReposPromise'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// getReposAsync();
// getReposPromise();