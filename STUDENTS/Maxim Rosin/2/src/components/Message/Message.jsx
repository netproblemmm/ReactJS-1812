// import './style.css'

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// export default class Message extends Component {
//     constructor (props) {

//     }
// }

let msg = (props) => {
    let senderName = props.msg.usrName
    let text = props.msg.msgBody
    return (
        <div className="d-flex flex-column border-bottom border-top rounded p-5 mw-20">
            <strong>{ senderName }</strong>
            <p>{ text }</p>
        </div>
    )
}

export default msg