import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import './style/style.css';

import Messages from './components/MessageField/MessageField.jsx';

let user = 'User';

ReactDOM.render (
   <Messages user={ user }/>,
   document.getElementById('root'),
)