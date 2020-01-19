import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter } from 'react-router-dom'
import Router from './components/router.jsx'

ReactDOM.render (
   <BrowserRouter>
         <CssBaseline/>
         <Router />
   </BrowserRouter>
   , document.getElementById('root'),
)
