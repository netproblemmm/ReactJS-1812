import './style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { TextField, FloatingActionButton } from 'material-ui'
import SendIcon from 'material-ui/svg-icons/content/send'
import Message from '../Message/Message.jsx'
import PropTypes from "prop-types"

export default class Messages extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        messages: PropTypes.object.isRequired,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
    };   


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) {
            this.handleSendMessage (message, 'You')
        }  
    };

    handleSendMessage = (message, sender) => {
        if (message.length > 0 || sender === 'bot') {
            this.props.sendMessage(message, sender);
        }
        if (sender === 'You') {
            this.setState({ input: ''})
        }
    };

    render () {
        const{ chatId, chats, messages } = this.props

        const messageElements = chats[chatId].messageList.map(messageId => (
            <Message
                key = { messageId }                                                                          key={ index }
                text={ messages[messageId].text }
                sender={ messages[messageId].sender }
            />));
 
 

        return [
                <div key='message-field' className="message-field" >
                    { messageElements }
                </div>,
                <div keys='text-field' style={ { width: '100%', display: 'flex' } }>
                    <TextField 
                    name="input"
                    hintText="Enter your message"
                    style={ { fontSize: '22px' } }
                    value={ this.state.input }
                    onChange={ this.handleChange }
                    onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }/>
                    <FloatingActionButton onClick = { () => this.handleSendMessage(this.state.input, 'You') }>
                        <SendIcon />
                    </FloatingActionButton>
                </div>
        ]       
    }
}