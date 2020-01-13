import React from 'react'
import ReactDom from 'react-dom'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from '@material-ui/core/Container'

import BlockMain from './components/BlockMain/BlockMain.jsx'
import Header from './components/Header/Header.jsx'
import Box from '@material-ui/core/Box'
import './styles/styles.css'

let user = { id: 1, name: 'Вася' }

ReactDom.render (
    <Box height={'100vh'}>
        <Container maxWidth="lg">
            <Header />
            <BlockMain user={ user } />
        </Container>
     </Box>, 
    document.querySelector ('#app')
)
