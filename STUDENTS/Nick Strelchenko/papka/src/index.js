import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import { createStore } from 'redux';
import chatReducer from './reducers/chatReducer';


const store =  createStore(chatReducer)

ReactDOM.render(<App store={store}/>, document.getElementById('root'));



