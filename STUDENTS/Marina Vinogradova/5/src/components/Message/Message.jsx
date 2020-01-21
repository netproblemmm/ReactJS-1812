 import '../Message/style.css'

import React from 'react'


let msg = (props) => {
    let senderName = props.msg.usrName
    let text = props.msg.msgBody
    let cloudColor = props.msg.clsName
    let right = props.msg.ltr

    return (
        <div className={ right }>
        <div className={ cloudColor }>
            <strong>{ senderName }</strong>
            <p>{ text }</p>
        </div>
        </div>
    )
}

export default msg