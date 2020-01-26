import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import connect from 'react-redux/es/connect/connect.js'
import {TextField, FloatingActionButton} from 'material-ui'
import SendIcon from 'material-ui/svg-icons/content/send'
import Message from '../Message/Message.jsx'
import {sendMessage} from '../../actions/message_actions.js'
import './style.css'
import ChatList from '../ChatList/ChatList.jsx'

let usrName = 'Human'
let botName = 'Mr.Robo'

class Messages extends Component {
    textInput = React.createRef() // реализация фокуса на chatTextArea
    static propTypes = {
       chatId: PropTypes.number.isRequired,
       messages: PropTypes.object.isRequired,
       chats: PropTypes.object.isRequired,
       sendMessage: PropTypes.func.isRequired,
    }
    state = {
        input: '',
    };

    componentDidMount () {
        this.textInput.current.focus()
    }

    sendMessage = (message, sender) => {
       const {chatId, messages} = this.props
       const messageId = Object.keys(messages).length + 1;
       this.props.sendMessage(messageId, message, sender, chatId)
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) {
            this.handleSendMessage(message, 'it')
        }
    }

    handleSendMessage = (message, sender) => {
       if (message.length > 0 || sender === 'bot') {
           this.sendMessage(message, sender)
       }
       if (sender === 'it') {
           this.setState({ input: '' })
       }
    }

    render() {
        const {chatId, chats, messages} = this.props;
        console.log (messages)
        const messageElements = chats[chatId].messageList.map(messageId => (
            <Message
                key={messageId}
                text={messages[messageId].text}
                sender={messages[messageId].sender}
            />
        ))
        return [
            <div className="chatBlock">
                <div className="chatTitle">
                    <h2 className="chatTitleName">Happy Chat</h2>
                </div>
                <div className="chatBody">
                    {messageElements}
                </div>
                <div className="chatSendArea">
                    <TextField
		            name = "input"
                    ref={this.textInput}
                    //className="chatTextArea"
                    hintText="Enter your message"
                    value={this.state.input}
                    onChange={this.handleChange}
                    onKeyUp={(event) => this.handleKeyUp(event, this.state.input)}
                    fullWidth
                    />
                    <FloatingActionButton onClick={() => this.handleSendMessage(this.state.input, 'it')}>
                        <SendIcon className="sendIcon"/>
                    </FloatingActionButton>
                </div>
            </div>
        ]
    }
}

let mapStateToProps = ({chatReducer, messageReducer}) => ({
    chats: chatReducer.chats,
    messages: messageReducer.messages
})
let mapDispatchToProps = dispatch => bindActionCreators ({sendMessage}, dispatch)

export default connect (mapStateToProps, mapDispatchToProps) (Messages)