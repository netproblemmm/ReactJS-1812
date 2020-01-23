import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Layout from './components/Layout/Layout.jsx'

ReactDOM.render (
    <MuiThemeProvider>
        <Layout />
    </MuiThemeProvider>
    , document.getElementById('root'),
)