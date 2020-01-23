import style from './style.css' 
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap'

import Messages from './components/Messages/Messages.jsx'

let user = 'Вы: '

ReactDOM.render (
   <Messages user={ user }/>,
   document.getElementById('root'),
)