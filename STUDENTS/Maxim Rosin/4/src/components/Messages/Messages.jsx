// import './style.css'

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { TextField, FloatingActionButton } from 'material-ui'
import SendIcon from 'material-ui/svg-icons/content/send'
import Message from '../Message/Message.jsx'
import PropTypes from "prop-types"

export default class Messages extends Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
    };
        
        state = {
            messages: [
                {body: 'Hello', author: null}, 
                {body: 'What is up?', author: null}
            ],
            inputText: '',
            chats: {
                1: { title: 'Чат 1', messagesList: [1] },
                2: { title: 'Чат 2', messagesList: [2] },
                3: { title: 'Чат 3', messagesList: [] }
            }
        }




    componentDidUpdate () {
        const { messages } = this.state;
        if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
            Object.values(messages)[Object.values(messages).length - 1].sender === 'me') {
            setTimeout(() =>
                this.handleSendMessage('Не приставай ко мне, я робот!', 'bot'), 1000);
        }
    }
 

    sendMessage = (message, sender) => {
        const { messages, chats, input } = this.state;
        const { chatId } = this.props;
 
        if (input.length > 0 || sender === 'bot') {
            const messageId = Object.keys(messages).length + 1;
            this.setState({
                messages: {...messages,
                    [messageId]: {text: message, sender: sender}},
                chats: {...chats,
                    [chatId]: { ...chats[chatId],
                        messageList: [...chats[chatId]['messageList'], messageId]
                    }
                },
            })
        }
        if (sender === 'me') {
            this.setState({ input: '' })
        }
    };
 
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    keyboardHandler = (e) => {
        if (e.keyCode !== 13) {
            this.setState ({inputText: e.target.value})
        } else {
            this.sendMessage ()
        }
            
    }

    render () {
        let { chatId } = this.props
        let { messages, chats } = this.state

        const messageElements = chats[chatId].messageList.map((messageId, index) => (
            <Message
                                                                                          key={ index }
                text={ messages[messageId].text }
                sender={ messages[messageId].sender }
            />));
 
 

        return (
            <div className="msg-wrapper">
                <div key='messageElements' >
                    { MessageArr }
                </div>
                <div>
                    <TextField 
                    name="input"
                    hintText="Enter your message"
                    value={ this.state.inputText }
                    onChange={ this.keyboardHandler }
                    onKeyUp={ this.keyboardHandler }/>
                    <FloatingActionButton onClick = { this.sendMessage }>
                        <SendIcon />
                    </FloatingActionButton>
                </div>
            </div>
        )
    }
}