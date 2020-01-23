 import './style.css'

import React, {Component} from 'react'


import Message from '../Message/Message.jsx'

export default class Messages extends Component {
    constructor (props) {
        super (props)

        this.state = {
            messages: [
                {body: 'Hello', author: null}, 
                {body: 'What is up?', author: null}
            ]
        }
    }

    componentDidUpdate () {
        let msgs = this.state.messages
        if (msgs.length % 2 === 1) {
            setTimeout (() => {
                this.setState (
                    {
                        messages: [...this.state.messages, {body: 'Ваш звонок очень важен для нас', author: 'mr. Robo'}]
                    }
                )
            }, 1000)
        }
    }

    sendMessage = () => {
        this.setState ({
            messages: [...this.state.messages, {body: 'Нормально'}]
        })
    }

    render () {
        let { user } = this.props
        let { messages } = this.state

        let MessageArr = messages.map (message => <Message msg={ {
            usrName: message.author ? message.author : user, 
            msgBody: message.body
        } }/>)
        return (
            <div className="text-field-full">
                <div className="msg-wrapper">
                    <h2 className="msg-wrapper-head"> Student's chat</h2>
                </div>
                <div className="chat-texts">{ MessageArr }
                </div>
            
            <div className="type-bottom">
                {/* <form action=""> */}
                    <textarea className="type-input" type="textarea" placeholder="Your message..."/>
                    <button className="btn-send-msg" onClick = { this.sendMessage }>&#129094;</button>
                {/* </form> */}
            </div>
            </div>
        )
    }
}