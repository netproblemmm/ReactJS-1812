// import './style.css'

import styles from './style.css' 
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import Message from '../Message/Message.jsx'

export default class Messages extends Component {
    constructor (props) {
        super (props)

        this.state = {
            messages: [
                {body: 'Hello', author: null}, 
                {body: 'What is up?', author: null}
            ],
            input: ""
        }
    }

    componentDidUpdate () {
        let msgs = this.state.messages
        if (msgs.length % 2 === 1) {
            setTimeout (() => {
                this.setState (
                    {
                        messages: [...this.state.messages, {body: 'Ваш звонок очень очень очень важен для нас', author: 'mr. Robo'}]
                    }
                )
            }, 1000)
        }
    }

    sendMessage = () => {
        if (this.state.input !== ""){
        this.setState ({
            messages: [...this.state.messages, {body: this.state.input, author: "Me"}]
        })
        this.setState({input: ""})
    }
    }

    onChangeHandler = (e) =>{
        this.setState({input: e.target.value})
    }

    render () {
        let { user } = this.props
        let { messages } = this.state

        let MessageArr = messages.map (message => <Message msg={ {
            usrName: message.author ? message.author : user, 
            msgBody: message.body
        } }/>)

        return (
            <div className="wrapper">
            <div className="msg-wrapper">
                <h2>WhatsAcct</h2>
                { MessageArr }  
            </div>
            <div className="input-wrapper">
                <input className="input-message" value={this.state.input} onChange={this.onChangeHandler} placeholder='Сообщение'></input>
                <button className='button-send' onClick = { this.sendMessage }>Send</button>
                </div>
            </div>
        )
    }
}