import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const applicationSetUp = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);


ReactDOM.render(applicationSetUp, document.getElementById('root'))
registerServiceWorker();
