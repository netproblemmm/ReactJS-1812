import React from 'react'
import ReactDom from 'react-dom'
import './styles/styles.css'

const el = React.createElement (
    'h1',
    {className: 'h1'},
    'It works new content'
)

ReactDom.render (
    el,
    document.querySelector ('#app')
)
