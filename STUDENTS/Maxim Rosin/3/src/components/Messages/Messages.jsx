// import './style.css'

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { TextField, FloatingActionButton } from 'material-ui'
import SendIcon from 'material-ui/svg-icons/content/send'
import Message from '../Message/Message.jsx'
export default class Messages extends Component {
    constructor (props) {
        super (props)

        this.state = {
            messages: [{body: 'Hi', author: 'mr. Robo'}, 
            {body: 'What is up?', author: 'mr. Robo'}],
            inputText: ''
        }
    }
    
    componentDidUpdate () {
        let msgs = this.state.messages
        if (msgs.length % 2 === 1) {
           if (msgs.body === "Hi") {
            setTimeout (() => {
                this.setState (
                    {messages: 
                        [...this.state.messages, {body: 'Hello', author: 'mr. Robo'}]
                    }
                )
            }, 1000)
           } else {
            setTimeout (() => {
                    
                this.setState (
                    {messages: 
                        [...this.state.messages, {body: 'Я робот', author: 'mr. Robo'}]
                    }
                )
            }, 1000)
           }
                
           
            
        }
    }
   

    sendMessage = () => {
        this.setState ({
            messages: [...this.state.messages, {body: this.state.inputText}],
            inputText: ''
        }) 
    }
    
    keyboardHendler = (e) => {
        if (e.keyCode !== 13){
            this.setState ({ inputText: e.target.value })
        } else {
            this.sendMessage ()
        }
        
    }

    render () {
        let { user } = this.props
        let { messages } = this.state

    let MessageArr = messages.map (message => <Message msg={ {usrName: message.author ? message.author : user, msgBody: message.body} }/>)
        return (
            <div className="msg-wrapper">
                <div className = "d-flex flex-column">
                    { MessageArr }
                </div>
                <div>
                    <TextField 
                    name="input"
                    hintText="Enter your message"
                    value={ this.state.inputText }
                    onChange={ this.keyboardHendler }
                    onKeyUp={ this.keyboardHendler }/>
                    <FloatingActionButton onClick = { this.sendMessage }>
                        <SendIcon />    
                    </FloatingActionButton> 
                </div>
                
                
                <input type="date"></input>
            </div>
        )
    }
}