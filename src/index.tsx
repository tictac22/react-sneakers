import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import "./styles/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <div className="layout">
      <div className="wrapper">
        <App />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

