import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { TextField, Fab } from '@material-ui/core'
import { FilledInput } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Message from '../Message/Message.jsx'
import '../Messages/style.css'


export default class Messages extends Component {
    constructor (props) {
        super (props)
        this.randomBotReply = this.randomBotReply.bind(this),
        this.state = {
            messages: [
                {body: 'Hello', author: null}, 
                {body: 'What is up?', author: null}
            ],
            inputText: ''
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

    sendMessage = () => {
        this.setState ({
            messages: [...this.state.messages, {body: this.state.inputText}],
            inputText: ''
        })
    }

    keyboardHandler = (e) => {
        if (e.keyCode !== 13) {
            this.setState ({inputText: e.target.value})
        } else {
            this.sendMessage()
        }
    }

    render () {
        let { user } = this.props
        let { messages } = this.state

        let MessageArr = messages.map (message => <Message msg={ {
            usrName: message.author ? message.author : user, 
            // строка ниже меняет класс у сообщения и стиль, если это робот
            clsName: message.author === 'mr. Robo'? 'bot-cloud-msg' : 'msg-cloud', 
            ltr: message.author === 'mr. Robo'? 'msg-right' : '', 
            msgBody: message.body
        } }/>)
        return (
            <div className="text-field-full">
                <header>
                    <div className="msg-wrapper">
                    <button className="head-btn">&#8801;</button>    
                    <h2 className="msg-wrapper-head"> Student's chat</h2>
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