import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import middleware from './middleware/index';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {store} from './Store/Storage';
const store = createStore(rootReducer, middleware);


ReactDOM.render(

  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,  
  document.getElementById('root')

);

reportWebVitals();
