import React, {Component} from 'react'
import Messages from '../Messages/Messages.jsx'
import Header from '../Header/Header.jsx'
import ChatList from '../ChatList/ChatList.jsx'
import PropTypes from 'prop-types'

import './style.css'

let usrName = 'Human'
let botName = 'Mr.Robo'

export default class Layout extends Component {
    static propTypes = {
        chatId: PropTypes.number
    }

    static defaultProps = {
        chatId: 1
    }
    state = {
        chats: {
            1: {title: 'Чат 1', messageList: [1]},
            2: {title: 'Чат 2', messageList: [2]},
            3: {title: 'Чат 3', messageList: []}
        },
        messages: {
            1: {text: 'Hello', sender: botName},
            2: {text: 'What is up?', sender: botName}
        },
        //chatTextArea: '',
    }

    robotAnswer () {
        let robotAnswersArr = ['Можете повторить?', 'Не расслышал', 'Ага, хорошая погода', 'Думаю, что это так', 'Давай поболтаем']
        return (robotAnswersArr[Math.floor(Math.random() * robotAnswersArr.length)])
    }

    componentDidUpdate (prevProps, prevState) {
        let msgs = this.state.messages
        if (prevState.messages.length < msgs.length && msgs[msgs.length - 1].sender === usrName) {
            setTimeout (() => {
                this.sendMessage(this.robotAnswer(), botName)
            }, 1000)
        }
    }

    sendMessage = (message, sender) => {
        let {messages, chats} = this.state
        let {chatId} = this.props
        let messageId = Object.keys(messages).length + 1
        this.setState ({
                messages: {...messages,
                    [messageId]: {text: message, sender: sender}},
                chats: {...chats,
                    [chatId]: {...chats[chatId],
                    messageList: [...chats[chatId]['messageList'], messageId]}}
            })

        if (sender === usrName) {
            this.setState({input: ''})
        }
    }

    addChat = (title) => {
        let {chats} = this.state
        let chatId = Object.keys(chats).length + 1
        this.setState({
            chats: {...chats, [chatId]: {title: title, messageList: []}}
        })
    }

    render () {
        return (
            <div className="d-flex justify-content-center w-100 layout">
                <Header chatId = {this.props.chatId}/>
                <div className="d-flex justify-content-center w-100 layout-left-side">
                    <div className="pr-5 w-30">
                        <ChatList chats = {this.state.chats} addChat = {this.addChat}/>
                    </div>
                    <div className="d-flex justify-content-center w-100 layout-right-side">
                        <Messages
                            chatId = {this.props.chatId}
                            chats = {this.state.chats}
                            messages = {this.state.messages}
                            sendMessage = {this.sendMessage}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
