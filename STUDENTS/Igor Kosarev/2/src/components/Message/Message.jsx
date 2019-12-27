// import './style.css'
import styles from './style.css' 
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

let msg = (props) => {
    let senderName = props.msg.usrName
    let text = props.msg.msgBody
    return (
        <div className="d-flex flex-column message">
            <strong className="sender-name">{ senderName }</strong>
            <p className="message-body"><span className="message-text">{ text }</span></p>
        </div>
    )
}

export default msg