import React from 'react'
import ReactDom from 'react-dom'
import './style.css'
const elem = React.createElement(
  'h1',
    {className: "class"},
    'Hello React'
);

ReactDom.render(
    elem,
    document.querySelector('#app')
);