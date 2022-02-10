import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Buffer from './components/Buffer';
import Network from './components/Network';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Network name="Libera Chat" channel="#libera" />
    <Buffer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
