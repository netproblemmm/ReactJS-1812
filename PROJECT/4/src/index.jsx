import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Router from './components/router.jsx'

//2 вариант роутера
import { BrowserRouter } from 'react-router-dom'
import routes from './components/router.js'

ReactDOM.render (
   <BrowserRouter>
      <MuiThemeProvider>
         <Router />
      </MuiThemeProvider>
   </BrowserRouter>
   , document.getElementById('root'),
)

// ReactDOM.render (
//    <BrowserRouter>
//       { routes.map ((route) => {
//          return (
         // <Switch>
//             <Route ... />
//          </Switch>
//          )
//       }) }
//    </BrowserRouter>
// )