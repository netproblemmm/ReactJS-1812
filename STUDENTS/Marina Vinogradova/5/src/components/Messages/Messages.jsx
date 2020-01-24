import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { TextField, Fab } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import Message from '../Message/Message.jsx'
import '../Messages/style.css'
import PropTypes from 'prop-types';

import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import { sendMessage } from '../../actions/message_actions';

class Messages extends Component {
        static propTypes = {
            chatId: PropTypes.number.isRequired,
            messages: PropTypes.object.isRequired,
            chats: PropTypes.object.isRequired,
            sendMessage: PropTypes.func.isRequired,
        };

        constructor (props) {
        super (props)
        this.randomBotReply = this.randomBotReply.bind(this),
        this.state = {
            messages: [
                {body: 'Hello', author: null}, 
                {body: 'What is up?', author: null}
            ],
            inputText: '',
            chats: {
                1:{ title: 'Chat 1', messagesList: [1] },
                2:{ title: 'Chat 2', messagesList: [2] },
                3:{ title: 'Chat 3', messagesList: [] }
            }
        }
    }

  // функция рандомит и выдаёт на проду в строке 35 
    randomBotReply () {
        if (this.state.messages.length < 4) {
            return "Ваш звонок важен для нас"
        } else {
        let botReplyArr = ["Ты?", "Давай попозже", "О, божечки! О, кошечки!", "Няшка"]
        let finBotReply = Math.floor(Math.random() * botReplyArr.length)
        return (botReplyArr[finBotReply])
        }
    }

    componentDidUpdate () {
        let msgs = this.state.messages
        if (msgs.length % 2 === 1) {
            setTimeout (() => {
                this.setState (
                    {
                        messages: [...this.state.messages, {body: this.randomBotReply(), author: 'mr. Robo', classBot: 'bot-cloud-msg'}]
                    }
                )
            }, 1000)
        }
    }

    textInput = React.createRef();

    // sendMessage = () => {
    //     this.setState ({
    //         messages: [...this.state.messages, {body: this.state.inputText}],
    //         inputText: ''
    //     })
    // }


    sendMessage = (message, sender) => {
        const { messages } = this.state;
        const { chatId } = this.props;
 
        const messageId = Object.keys(messages).length + 1;
        this.setState({
            messages: [...this.state.messages, {body: this.state.inputText}],
            inputText: ''
        });
        this.props.sendMessage(message, sender, chatId);
    };

    keyboardHandler = (e) => {
        if (e.keyCode !== 13) {
            this.setState ({inputText: e.target.value})
            this.props.sendMessage({message: e.target.value});
        } else {
            this.sendMessage()
        }
    }

    render () {
        let { user } = this.props
        let { messages } = this.state //??????? 

        let MessageArr = messages.map (message => <Message msg={ {
            usrName: message.author ? message.author : user, 
            // строка ниже меняет класс у сообщения и стиль, если это робот
            clsName: message.author === 'mr. Robo'? 'bot-cloud-msg' : 'msg-cloud', 
            ltr: message.author === 'mr. Robo'? 'msg-right' : '', 
            rtl: message.author === 'It'? 'msg-left' : '', 
            msgBody: message.body
        } }/>)

        // let { user } = this.props
        // let { messages } = this.state
        // let MessageArr = Object.keys(messages).map(message =>
        //     <Message msg={ {
        //         usrName: message.author ? message.author : user, 
        //         // строка ниже меняет класс у сообщения и стиль, если это робот
        //         clsName: message.author === 'mr. Robo'? 'bot-cloud-msg' : 'msg-cloud', 
        //         ltr: message.author === 'mr. Robo'? 'msg-right' : '', 
        //         rtl: message.author === 'It'? 'msg-left' : '', 
        //         msgBody: message.body
        //     } }/>)
        
        
        return (
            <div className="text-field-full">
                <header>
                    <div className="msg-wrapper">   
                    <h2 className="msg-wrapper-head"> Student's chat #{ this.props.chatId }</h2>
                    </div>
                </header>
                
                <main>
                    <div className="chat-texts">{ MessageArr }
                    </div>
                </main>


                <footer>
                    <div className="type-bottom">
                    <TextField 
                        autoFocus={true}
                        name="input"
                        ref = {this.textInput}
                        hinttext="Write here"
                        value={ this.state.inputText }
                        onChange={ this.keyboardHandler }
                        onKeyUp={ this.keyboardHandler }
                        style={{width: 100 + '%'}} />
                    <Fab  className="btn-send-msg" style={{width: 40 + 'px', height: 40 + 'px', color: 'white'}} onClick = { this.sendMessage }>
                        <SendIcon />
                    </Fab> 
                    </div>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(Messages);