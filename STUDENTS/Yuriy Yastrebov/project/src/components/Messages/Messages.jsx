import './style.css'
import React, {Component} from 'react'
//import ReactDOM from 'react-dom'
import {TextField, FloatingActionButton} from 'material-ui'
import SendIcon from 'material-ui/svg-icons/content/send'
import Message from '../Message/Message.jsx'
import PropTypes from 'prop-types'

let usrName = 'Human'
let botName = 'Mr.Robo'

export default class Messages extends Component {
    static propTypes = {
            chatId: PropTypes.number.isRequired,
        }
    constructor (props) {
        super (props)
        this.textInput = React.createRef() // реализация фокуса на chatTextArea
        this.state = {
            messages: [
                {body: 'Hello', author: botName},
                {body: 'What is up?', author: botName}
            ],
            chatTextArea: '',
            chats: {
                1: {title: 'Чат 1', messagesList: [1]},
                2: {title: 'Чат 2', messagesList: [2]},
                3: {title: 'Чат 3', messagesList: [3]}
            }
        }
    }

    componentDidMount () {
        this.textInput.current.focus()
    }

    robotAnswer () {
        let robotAnswersArr = ['Можете повторить?', 'Не расслышал', 'Ага, хорошая погода', 'Думаю, что это так', 'Давай поболтаем']
        return (robotAnswersArr[Math.floor(Math.random() * robotAnswersArr.length)])
    }
 
    componentDidUpdate (prevProps, prevState) {
        let msgs = this.state.messages
        console.log(msgs[msgs.length - 1].author)
        if (prevState.messages.length < msgs.length && msgs[msgs.length - 1].author === usrName) {
            setTimeout (() => {
                this.setState (
                    {
                       messages: [...msgs, {body: this.robotAnswer(), author: botName}]  
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
        let MessageArr = messages.map((message, index) => <Message key={index} msg={{
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
                    ref={this.textInput}
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