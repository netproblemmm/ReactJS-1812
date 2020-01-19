import './style.css'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {TextField, FloatingActionButton} from 'material-ui'
import SendIcon from 'material-ui/svg-icons/content/send'
import Message from '../Message/Message.jsx'

let usrName = 'Human'
let botName = 'Mr.Robo'

export default class Messages extends Component {
    constructor (props) {
        super (props)
        this.state = {
            messages: [
                {body: 'Hello', author: usrName},
                {body: 'What is up?', author: usrName}
            ],
            chatTextArea: ''
        }
    }

    robotAnswer () {
        let robotAnswersArr = ['Можете повторить?', 'Не расслышал', 'Ага, хорошая погода', 'Думаю, что это так', 'Давай поболтаем']
        return (robotAnswersArr[Math.floor(Math.random() * robotAnswersArr.length)])
    }

    componentDidUpdate () {
        let msgs = this.state.messages
        if (msgs.length % 2 === 1) {
            setTimeout (() => {
                this.setState (
                    {
                       messages: [...this.state.messages, {body: this.robotAnswer(), author: botName}]  
                    }
                )
            }, 1000)
        }
    }

    sendMessage = () => {
        this.setState ({
            messages: [...this.state.messages, {body: this.state.chatTextArea, author: usrName}],
            chatTextArea: ''
        })
    }

    keyboardHandler = (e) => {
        if (e.keyCode !== 13) {
            this.setState({chatTextArea: e.target.value})
        } else {
            this.sendMessage ()
        }
        
    }

    render () {
        let {user} = this.props
        let {messages} = this.state
        let MessageArr = messages.map(message => <Message msg={{
            usrName: message.author ? message.author : user,
            senderType: message.author === botName ? 'message-left': 'message-right',
            msgBody: message.body
        }}/>)
        return (
            <div className="chatBlock">
                <div className="chatTitle">
                    <h2 className="chatTitleName">Happy Chat</h2>
                </div>
                <div className="chatBody">
                    {MessageArr}
                </div>
                <div className="chatSendArea">
                    <TextField
                    className="chatTextArea"
                    hintText="Enter your message"
                    value={this.state.chatTextArea}
                    onChange={this.keyboardHandler}
                    onKeyUp={this.keyboardHandler}
                    fullWidth
                    />
                    <FloatingActionButton className="chatSendButton" onClick = {this.sendMessage}>
                        <SendIcon className="sendIcon"/>
                    </FloatingActionButton>
                </div>
            </div>
        )
    }
}