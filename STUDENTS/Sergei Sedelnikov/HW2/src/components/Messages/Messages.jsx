import style from './style.css' 
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import Message from '../Message/Message.jsx'

export default class Messages extends Component {
    constructor (props) {
        super (props)

        this.state = {
            messages: [
                {body: 'Команды бота:', author: 'Пассивно-агрессивный бот:'}, 
                {body: '!погода - узнать погоду', author: ' '},
                {body: '!новости - узнать последние новости', author: ' '},
                {body: '!дела - узнать как дела у бота', author: ' '},
            ]
        }
    }

    componentDidUpdate () {
        let msgs = this.state.messages
        
        if((msgs[msgs.length-1].author !== 'Пассивно-агрессивный бот:') && (msgs[msgs.length-1].body.substr(0,1) == '!'))
        switch(msgs[msgs.length-1].body){
            case '!погода':
                setTimeout (() => {
                    this.setState (
                        {
                            messages: [...this.state.messages, {body: 'Выгляни в окно и посмотри', author: 'Пассивно-агрессивный бот:'}]
                        }
                    )
                }, 1000);
                break;
            case '!новости':
                setTimeout (() => {
                    this.setState (
                        {
                            messages: [...this.state.messages, {body: 'Иди купи газету', author: 'Пассивно-агрессивный бот:'}]
                        }
                    )
                }, 1000);
                break;
            case '!дела':
                setTimeout (() => {
                    this.setState (
                        {
                            messages: [...this.state.messages, {body: 'Пока не родила', author: 'Пассивно-агрессивный бот:'}]
                        }
                    )
                }, 1000);
                break;
            default: 
                setTimeout (() => {
                    this.setState (
                        {
                            messages: [...this.state.messages, {body: 'Не знаю такой команды и тебя бы предпочел не знать', author: 'Пассивно-агрессивный бот:'}]
                        }
                    )
                }, 1000);
        }
    }

    sendMessage = () => {
        this.setState ({
            messages: [...this.state.messages, {body: document.querySelector(".write_msg").value}]
        })
        
        document.querySelector(".write_msg").value = '';
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
                <div class="msg">
                  { MessageArr }
                </div>
                <div class="type_msg">
                    <div class="input_msg">
                        <input type="text" class="write_msg" placeholder="Введите сообщение" />
                        <button class="msg_btn" type="button"  onClick = { this.sendMessage }></button>
                    </div>
                </div>
            </div>
        )
    }
}