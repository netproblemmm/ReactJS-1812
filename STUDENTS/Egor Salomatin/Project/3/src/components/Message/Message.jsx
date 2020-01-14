import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import style from './style.css'
import Avatar from '@material-ui/core/Avatar';



let msg = (props) => {
    let senderName = props.msg.usrName
    let senderNameClass = props.msg.usrName === 'Robot' ? "message-robot" : "message-user"
    let text = props.msg.msgBody
    return (
        <div className={senderNameClass}>
            <Avatar alt={senderName} src="https://via.placeholder.com/50"/>  
            <div className="msg">
                <strong className="msg-author">{ senderName }</strong>
                <p className="msg-text">{ text }</p>
            </div>
        </div>
    )
}

export default msg