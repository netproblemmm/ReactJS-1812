import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import { createStore,applyMiddleware } from 'redux';
import chatReducer from './reducers/chatReducer';
import middlewares from './middlewares'
import initStore from './utils/store.js'


ReactDOM.render(<App />, document.getElementById('root'));



