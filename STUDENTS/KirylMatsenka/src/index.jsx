import React from 'react'
import ReactDom from 'react-dom'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Box from '@material-ui/core/Box'
import './styles/styles.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './components/router.jsx'

import initStore from './store.js'
import { Provider } from 'react-redux'

ReactDom.render (
    <Provider store = { initStore () }>
        <BrowserRouter>
            <Box height={'100vh'}>
                <Router />
            </Box>
        </BrowserRouter>
     </Provider>, 
    document.querySelector ('#app')
)
