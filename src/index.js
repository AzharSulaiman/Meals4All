import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
// import { ConnectedRouter } from 'connected-react-router'
import configureStore from './store';
import store, { history } from './store'
import App from './containers/app'
import 'bootstrap/dist/css/bootstrap.css';

import 'sanitize.css/sanitize.css'
import './index.css'

const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={configureStore()}>
        <App />
  </Provider>
)
