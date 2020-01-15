import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap'
import './style.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Messages from './components/Messages/Messages.jsx'
import Child from './components/testcomp/testcomp.jsx'

ReactDOM.render (
    <MuiThemeProvider>
        <Messages />
    </MuiThemeProvider>,
    document.getElementById('root')
)