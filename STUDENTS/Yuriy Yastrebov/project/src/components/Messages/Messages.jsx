import React, {Component} from 'react'
//import ReactDOM from 'react-dom'
import {TextField, FloatingActionButton} from 'material-ui'
import SendIcon from 'material-ui/svg-icons/content/send'
import Message from '../Message/Message.jsx'
import PropTypes from 'prop-types'
import './style.css'

export default class Messages extends Component {
    constructor (props) {
        super (props)
        this.textInput = React.createRef() // реализация фокуса на chatTextArea
    }
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        messages: PropTypes.object.isRequired,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
    }

    state = {
        input: ''
    }

    componentDidMount () {
        this.textInput.current.focus()
    }

    handleSendMessage = (message, sender) => {
        if (message.length > 0 || sender === this.props.usrName) {
            this.props.sendMessage(message, sender)
        }
        if (sender === this.props.usrName) {
            this.setState({input: ''})
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) {
            this.handleSendMessage(message, this.props.usrName)
        }
    }

    render () {
        let {chatId, chats, messages} = this.props
        let MessageArr = chats[chatId].messageList.map((messageId) => (
            <Message
                key = {messageId}
                text = {messages[messageId].text}
                sender = {messages[messageId].sender}
            />
            ))

        return (
            <div className="chatBlock">
                <div className="chatTitle">
                    <h2 className="chatTitleName">Happy Chat</h2>
                </div>
                <div className="chatBody">
                    {MessageArr}
                </div>,
                <div className="chatSendArea">
                    <TextField
                    ref={this.textInput}
                    className="chatTextArea"
                    hintText="Enter your message"
                    value={this.state.chatTextArea}
                    onChange={this.handleChange}
                    onKeyUp={(event) => this.handleKeyUp(event, this.state.chatTextArea)}
                    fullWidth
                    />
                    <FloatingActionButton
                        className="chatSendButton"
                        onClick = {() => this.handleSendMessage(this.state.chatTextArea, usrName)}>
                        <SendIcon className="sendIcon"/>
                    </FloatingActionButton>
                </div>
            </div>
        )
    }
}