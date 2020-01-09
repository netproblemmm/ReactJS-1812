 import './style.css'

import React, {Component} from 'react'


let msg = (props) => {
    let senderName = props.msg.usrName
    let text = props.msg.msgBody
    return (
        <div className="msg-margin"><div className="d-flex flex-column msg-cloud">
            <strong>{ senderName }</strong>
            <p>{ text }</p>
        </div>
        </div>
    )
}

export default msg