import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';

let message = (props) => {
    let senderName = props.msg.usrName
    let text = props.msg.msgBody
    return (
        <div className="d-flex flex-column">
            <strong className="send">{ senderName }</strong>
            <p>{ text }</p>
        </div>
    )
};

export default message;