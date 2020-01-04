// import './style.css'

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import style from './style.scss'

let msg = (props) => {
    let senderName = props.msg.usrName
    let text = props.msg.msgBody
    return (
        <div className="d-flex flex-column message">
            <img src="https://via.placeholder.com/50" alt="ava" width="50px" height="50px" className="message__author-pic"/>
            <div className="message__text-block">
                <strong className="message__author-name">{ senderName }</strong>
                <p className="message__text">{ text }</p>
            </div>
        </div>
    )
}

export default msg