import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter } from 'react-router-dom'
import Router from './components/router.jsx'

import initStore from './store.js'
import { Provider } from 'react-redux';

ReactDOM.render (
      <Provider store = { initStore () }>
            <BrowserRouter>
                  <CssBaseline/>
                  <Router />
            </BrowserRouter>
      </Provider>
   , document.getElementById('root'),
)
