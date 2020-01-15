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
    if (senderName === 'You') {
    return (
            <div class="d-flex flex-column border rounded w-50 h-auto mb-2 pl-2 bg-warning align-self-end">
            <strong>{ senderName }</strong>
            <p>{ text }</p>
        </div>      
    )
    } else if (senderName === 'mr. Robo') {
        return (
        <div class="d-flex flex-column border rounded w-50 h-auto mb-2 pl-2">
            <strong>{ senderName }</strong>
            <p>{ text }</p>
        </div>
        )
    }
}

export default msg