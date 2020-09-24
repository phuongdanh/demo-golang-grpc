import React from 'react';
import ReactDOM from 'react-dom';
import './asset/css/main.css';
import App from './init/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
