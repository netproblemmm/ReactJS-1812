import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/router.jsx';
import './style/style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider>
            <Router />
        </MuiThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);