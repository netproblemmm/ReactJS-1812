// import './style.css'

import styles from './style.css' 
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { TextField, FloatingActionButton } from 'material-ui'
import SendIcon from 'material-ui/svg-icons/content/send'
import Message from '../Message/Message.jsx'



export default class Messages extends Component {
    constructor (props) {
        super (props)

        this.state = {
            messages: [
                {body: 'Hello', author: "Smth"}, 
                {body: 'What is up?', author: "Smth"}
            ],
            inputText: '',
            roboMessages: [
                {body: 'Хватит мне писать, я робот', author: "mr. Robo"}, 
                {body: 'Я робот, я только говорю что Ваш звонок очень важен для нас и всё!', author: "mr. Robo"},
                {body: 'Я всё равно ничем не смогу помочь, так как я просто робот', author: "mr. Robo"}
            ],
            answerIndex: 0,
            chats: {
                1: { title: 'Mary', messagesList: [
                    {body: 'Hello! How are you?', author: "Mary", msgId: "1"},
                    {body: 'Hi! Fine! And you?', author: "You", msgId: "2"},
                    {body: 'Fine! What is your plan for this weekend?', author: "Mary", msgId: "3"},
                ] },
                2: { title: 'Alex', messagesList: [
                    {body: 'Hello!', author: "Alex", msgId: "1"},
                    {body: 'Hi! ', author: "You", msgId: "2"}
                ] },
                3: { title: 'Bill', messagesList: [
                    {body: 'Time to pay!', author: "Bill", msgId: "1"}
                ] },
                4: { title: 'Steave', messagesList: [
                    {body: 'Help me, please!', author: "Steave", msgId: "1"}
                ] },
                5: { title: 'Ealon', messagesList: [
                    {body: 'Hi!', author: "Ealon", msgId: "1"},
                    {body: 'Hi!', author: "You", msgId: "2"},
                    {body: 'Drive Tesla!', author: "Ealon", msgId: "3"}
                ] }
            }
        }
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    componentDidUpdate () {
        
        let msgs = this.state.messages
        let rmsgs = this.state.roboMessages
        let index = this.state.answerIndex
        if (msgs.length % 2 === 1) {          
            setTimeout (() => {
                if (index ===0) {
                this.setState (
                    {
                        messages: [...this.state.messages, {body: 'Ваш звонок очень важен для нас', author: 'mr. Robo'}]
                    }
                )
                this.setState({
                    answerIndex: 1
                })
                } else {
                    let i = this.getRandomInt(rmsgs.length)
                    this.setState (
                                {
                                    messages: [...this.state.messages, {body: rmsgs[i].body, author: rmsgs[i].author}]
                                }
                            )
                }
        }, 1000)

        }
    }

    // sendMessage = () => {
    //     this.setState ({
    //         messages: [...this.state.messages, {body: this.state.inputText}],
    //         inputText: ''
    //     })
    // }

    sendMessage = () => {
        let { chatId } = this.props
        let { user } = this.props
        let {chats} = this.state
        let bufferArr = {...chats}
        bufferArr[chatId].messagesList.push({body: this.state.inputText, author: user, msgId: Date.now()}) //очень костыльное решение, неэффективное с точки зрения памяти, но работает
        this.setState ({
            chats: bufferArr,
            inputText: ''
        })        
    }

    keyboardHandler = (e) => {
        if (e.keyCode !== 13) {
            this.setState ({inputText: e.target.value})
        } else {
            this.sendMessage ()
        }
    }

    // refillMessageArr = () => {
       
    //     let { chatId } = this.props
    //     let {chats} = this.state
    //     let arr = chats[chatId].messagesList
    //     // let l = chats[chatId].messagesList.length
    //     // for (let i = 0; i<l; i++) {
    //     //     arr.push(chats[chatId.messagesList[i]])
    //     // }
    //     return arr
    // }

    render () {
        let { user } = this.props
        let { messages } = this.state
        let { chatId } = this.props
        let {chats} = this.state


        let MessageArr = chats[chatId].messagesList.map (message => <Message msg={ {
            usrName: message.author ? message.author : user, 
            msgBody: message.body
        } }/>)

        //let MessageArr =this.refillMessageArr




        // let MessageArr = chats[chatId].map (message => <Message msg={ {
        //     usrName: message.author ? message.author : user, 
        //     msgBody: message.body
        // } }/>)

        return (
            
            <div className="msg-wrapper w-100">
                
                <div className="message-field">
                    { MessageArr }
                </div>
                <div className="textinput-line row">
                    <div className="col-11">
                    <TextField
                    fullWidth
                    style={{ margin: 10 }}
                    margin="normal"
                    name="input"
                    hintText="Enter your message"
                    value={ this.state.inputText }
                    onChange={ this.keyboardHandler }
                    onKeyUp={ this.keyboardHandler }/>
                    </div>
                    <div className="col-1 right">
                    <FloatingActionButton onClick = { this.sendMessage }>
                        <SendIcon />
                    </FloatingActionButton>
                    </div>
                    
                </div>
            </div>
        )
    }
}