import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Router from './components/router.jsx';
import './style/style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import initStore from './utils/store.js';

ReactDOM.render(
    <Provider store={ initStore() }>
        <BrowserRouter>
            <MuiThemeProvider>
                <Router />
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);