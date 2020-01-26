import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import Router from './components/router.jsx'

import initStore from './store.js'
import { Provider } from 'react-redux';



ReactDOM.render (
   <Provider store = { initStore () }>
      <BrowserRouter>
         <MuiThemeProvider>
            <Router />
         </MuiThemeProvider>
      </BrowserRouter>      
   </Provider>
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