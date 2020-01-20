import './style.css'
import React, {Component} from 'react'
//import ReactDOM from 'react-dom'

let msg = (props) => {
    let senderName = props.msg.usrName
    let text = props.msg.msgBody
    let senderType = props.msg.senderType

    return (
        <div className={senderType}>
            <strong>{senderName}</strong>
            <p>{text}</p>
        </div>
    )
}

export default msg