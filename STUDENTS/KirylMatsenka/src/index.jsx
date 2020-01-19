import React from 'react'
import ReactDom from 'react-dom'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Box from '@material-ui/core/Box'
import './styles/styles.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './components/router.jsx'


ReactDom.render (
    <BrowserRouter>
        <Box height={'100vh'}>
            <Router />
        </Box>
     </BrowserRouter>, 
    document.querySelector ('#app')
)
