import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

const el = React.createElement(
    'h1',
    {className: 'rnd'},
    'Hello React'
)

ReactDOM.render(
    el,
    document.querySelector('#app')
)