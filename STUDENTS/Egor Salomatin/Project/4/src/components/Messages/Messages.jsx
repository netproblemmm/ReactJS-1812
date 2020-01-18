import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import Message from '../Message/Message.jsx'
import SendIcon from '@material-ui/icons/Send'
import style from './style.css'
import { styled } from '@material-ui/core/styles'

const MyField = styled(TextField)({
      width: '500px',
      marginRight: '20px'
  });


export default class Messages extends Component {
    constructor (props) {
        super (props)

        let msg = new Map();

        this.state = {
            messages: msg,
            inputText: ''
        }
        this.answArr = ['Как дела?', 'Добрый день. Чем могу помочь?', 'Рад помочь!', 'Хорошего дня!', 'Что делаешь?']
    }

    RobotAnswer() {
        let rndIndex = Math.floor((Math.random()*5))
        let robotAnswer = this.answArr[rndIndex]
        setTimeout(() => {
            let msgId = Date.now()
            this.setState(function(state, props) {
                state.messages.set(msgId, {
                    author: 'Robot',
                    text: robotAnswer
                })
                return (state)
            })
            this.props.addMessage(msgId);
        }, 1000)
        console.log(this.state)
    }

    sendMessage = () => {
        let msgId = Date.now()
        this.setState(function(state, prev) {
            state.messages.set(msgId, {
                author: this.props.user,
                text: state.inputText
            })
            state.inputText = ''
            return(state)
        }
        )
        this.props.addMessage(msgId);
        this.RobotAnswer()
        console.log(this.state)
    }

    keyboardHandler = (e) => {
        if (e.keyCode !== 13) {
            this.setState ({inputText: e.target.value})
        } else {
            this.sendMessage ()
        }
            
    }

    render () {
        let { messagesIds } = this.props
        
        let MessageArr = []

        messagesIds.forEach(element => {
            let msg = this.state.messages.get(element)
            MessageArr.push(<Message msg = {msg}/>)
        });

        return (
            <div className="msg-wrapper">
                <h2>WhatsAcct</h2>
                <div className="msg-field">
                    { MessageArr }
                </div>
                <div className="msg-controls">
                    <MyField 
                    name="input"
                    label="Enter your message"
                    value={ this.state.inputText }
                    onChange={ this.keyboardHandler }
                    onKeyUp={ this.keyboardHandler }/>
                    <Fab onClick = { this.sendMessage }>
                        <SendIcon />
                    </Fab>
                </div>
            </div>
        )
    }
}