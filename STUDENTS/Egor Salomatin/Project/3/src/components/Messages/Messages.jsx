import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import Message from '../Message/Message.jsx'
import SendIcon from '@material-ui/icons/Send'
import style from './style.css'

export default class Messages extends Component {
    constructor (props) {
        super (props)

        this.state = {
            messages: [],
            inputText: ''
        }
        this.answArr = ['Как дела?', 'Добрый день. Чем могу помочь?', 'Рад помочь!', 'Хорошего дня!', 'Что делаешь?']
    }

    RobotAnswer() {
        let rndIndex = Math.floor((Math.random()*5))
        console.log(rndIndex)
        let robotAnswer = this.answArr[rndIndex]
        setTimeout(() => {this.setState( {
            messages: [...this.state.messages, {body: robotAnswer, author: 'Robot'}],
            inputText: this.state.inputText
        })}, 1000)
    }

    sendMessage = () => {
        this.setState ({
            messages: [...this.state.messages, {body: this.state.inputText}],
            inputText: ''
        })
        this.RobotAnswer()
    }

    keyboardHandler = (e) => {
        if (e.keyCode !== 13) {
            this.setState ({inputText: e.target.value})
        } else {
            this.sendMessage ()
        }
            
    }

    render () {
        let { user } = this.props
        let { messages } = this.state

        let MessageArr = messages.map (message => <Message msg={ {
            usrName: message.author ? message.author : user, 
            msgBody: message.body
        } }/>)

        return (
            <div className="msg-wrapper">
                <div className="msg-field">
                    { MessageArr }
                </div>
                <div>
                    <TextField 
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