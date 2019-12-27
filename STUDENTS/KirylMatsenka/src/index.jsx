import React from 'react'
import ReactDom from 'react-dom'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css'

import BlockMain from './components/BlockMain/BlockMain.jsx'
import Header from './components/Header/Header.jsx'
import './styles/styles.css'


let user = { id: 1, name: 'Вася' }

ReactDom.render (
    <div className={'container full-height'}>
        <Header user={ user } />
        <BlockMain user={ user } />
    </div>, 
    document.querySelector ('#app')
)
