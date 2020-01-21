import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ChatList from './components/ChatList/ChatList.jsx'
import Messages from './components/Messages/Messages.jsx'
import Child from './components/testcomp/testcomp.jsx'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Router from './components/router.jsx'

//let user = 'You'

// ReactDOM.render (
//    <MuiThemeProvider>
//       <h2>WhatsAcct</h2>
//       <div className="container-sm">
//       <div className="row"> 
//       <div className="col-4">
//          <ChatList/>
      
//          </div>
//       <div className="col-8">
//          <Messages user={ user }/>
//       </div>
//       </div>
//       </div>
     
//    </MuiThemeProvider>
//    , document.getElementById('root'),
// )


ReactDOM.render (
   <BrowserRouter>
      <MuiThemeProvider>
         <Router />
      </MuiThemeProvider>
   </BrowserRouter>
   , document.getElementById('root'),
)