import React from 'react';
import ReactDOM from 'react-dom';
import './asset/css/main.css';
import * as serviceWorker from './serviceWorker';
import AppRoute from './routes/AppRoute';
import { StateProvider } from './store/store.js'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <AppRoute />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
