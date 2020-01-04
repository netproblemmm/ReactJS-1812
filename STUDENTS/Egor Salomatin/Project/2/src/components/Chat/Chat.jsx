import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Messages from './Messages/Messages.jsx'
import ChatControls from './ChatControls/ChatControls.jsx'
import style from './style.scss'


export default class Chat extends Component {
    render () {
        return (
            <div className="chat">    
                <Messages user= 'It'></Messages>
                <ChatControls/>
            </div>
        )
    }
}