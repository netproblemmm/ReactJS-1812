import React, {Component} from 'react'

import Message from '../Message/Message.jsx'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import SendIcon from '@material-ui/icons/Send'
import Fab from '@material-ui/core/Fab'
import Box from '@material-ui/core/Box'
import ScrollBottom from './ScrollBottom.jsx'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import Robot from '../Robot/Robot.js'

export default class Messages extends Component {
    constructor (props) {
        super (props)

        this.state = {
            messages: [],
            messageInput: '',
            message: {body: '', user: ''},
            valid: true,
            scrollElement: null,
            timeOuts: null,
            rob: new Robot (),
            chats: this.props.chats,
        }
    }

    componentDidMount () {
        // Привет от робота
        let hiFromRobot = setTimeout (() => {
            this.setState ({
                chats: this.setMessage (this.state.rob.hello)
            })
        }, 3000)
        // Это поле диалога
        this.setState ({
            scrollElement: document.querySelector ('#messages'),
            timeOuts: hiFromRobot,
        })
    }

    componentDidUpdate () {
        let messages = this.state.chats.find (message => message.id === +this.props.chat).messages
        let answerMessage = window.setTimeout (() => {
            let answer = messages.length > 0 ? this.state.rob.answer (this.getCurrentChat ().messages) : this.state.rob.hello
            this.setState ({
                chats: this.setMessage (answer)
            })
        }, 3000)

        if (messages[messages.length - 1] && messages[messages.length - 1].user == 'Rob') {
            while (answerMessage > this.state.timeOuts) {
                window.clearTimeout (answerMessage)
                answerMessage-- 
            }
        } else {
            answerMessage
        }
        // Scroll down automatically    
        if (this.getLastMessageInField ()) {
            this.getLastMessageInField ().scrollIntoView ({ behavior: 'smooth', block: 'center' })
        }
    }

    setMessage (message) {
        let chats = this.state.chats
        let chat = chats.find (chat => chat.id === +this.props.chat)
        chat.messages = [...chat.messages, message]
        return chats
    }

    getCurrentChat () {
        return this.state.chats.find (chat => chat.id === +this.props.chat)
    }

    // Достаем последний элемент в диалоге
    getLastMessageInField () {
        let fieldElements = this.state.scrollElement.children
        return fieldElements[fieldElements.length - 2]   
    }

    handleFieldChange = e => {
        if (e.keyCode === 13) {
            this.sendMessage ()
            return 
        } 
            this.setState ({ messageInput: e.target.value })
    }

    sendMessage = () => {
        if (this.state.messageInput === '') {
            this.setState ({ valid: false })
            return 
        } 

        let chats = this.state.chats
        let chat = chats.find (chat => chat.id === +this.props.chat)
        chat.messages = [...chat.messages, { body: this.state.messageInput, user: this.props.user.name }]
        this.setState ({
            chats: chats,
            messageInput: '',
            valid: true
        })
    }

    render () {
        let messagesArr = this.state.chats.find (chat => chat.id === +this.props.chat).messages  

            let messages = messagesArr.map ((message, i) => 
            <Box
            key={ i } 
            display="flex" 
            justifyContent={ message.user == this.props.user.name ? "flex-end" : "flex-start" }
            m={2}
            >
                <Message msg={ message } user={ this.props.user }/>
            </Box>
            )
        
        return (
            <Grid container item xs={9} alignContent={'flex-end'}>
                <Box 
                id="messages" 
                width={1} 
                maxHeight={'calc(100vh - 140px)'} 
                width="95%"
                overflow="auto" 
                alignSelf={'flex-end'}
                >
                    { messages }
                    <ScrollBottom scrollElement={this.state.scrollElement}>
                        <Fab color="secondary" size="small" aria-label="scroll back to top">
                            <KeyboardArrowDownIcon />
                        </Fab>
                    </ScrollBottom>
                </Box>

                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item xs={10}>
                        <TextField
                        id="message-input"
                        label={`Type message ${this.props.user.name}`}
                        variant="outlined"
                        color="primary"
                        onChange={this.handleFieldChange}
                        onKeyUp={this.handleFieldChange}
                        value={this.state.messageInput}
                        error={!this.state.valid}
                        helperText={!this.state.valid ? 'You can\'t leave it like that' : ''}
                        fullWidth                        
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <Fab color="primary" onClick={this.sendMessage}>
                            <SendIcon />
                        </Fab>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}