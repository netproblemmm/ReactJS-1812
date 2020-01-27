import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import Message from '../Message/Message.jsx'
import SendIcon from '@material-ui/icons/Send'
import style from './style.css'
import { styled } from '@material-ui/core/styles'

import { sendMessage } from '../../actions/messages_actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const MyField = styled(TextField)({
      width: '500px',
      marginRight: '20px'
  });


class Messages extends Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        messages: PropTypes.object.isRequired,
        chanels: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
        user: PropTypes.string.isRequired
     };

    constructor (props) {
        super (props)

        this.state = {
            inputText: ''
        }
        this.answArr = ['Как дела?', 'Добрый день. Чем могу помочь?', 'Рад помочь!', 'Хорошего дня!', 'Что делаешь?']
    }

    // RobotAnswer() {
    //     let rndIndex = Math.floor((Math.random()*5))
    //     let robotAnswer = this.answArr[rndIndex]
    //     setTimeout(() => {
    //         let msgId = Date.now()
    //         this.setState(function(state, props) {
    //             state.messages.set(msgId, {
    //                 author: 'Robot',
    //                 text: robotAnswer
    //             })
    //             return (state)
    //         })
    //         this.props.addMessage(msgId);
    //     }, 1000)
    //     console.log(this.state)
    // }

    sendMessage = () => {
        if (this.state.inputText.length > 0) {
            this.props.sendMessage(Object.keys(this.props.messages).length + 1, this.state.inputText, this.props.user, this.props.chatId)
            this.setState({inputText: ''})
        }
        
    }

    keyboardHandler = (e) => {
        if (e.keyCode !== 13) {
            this.setState ({inputText: e.target.value})
        } else {
            this.sendMessage ()
        }
            
    }

    render () {
        let { messageList } = this.props.chanels[this.props.chatId]
        
        let header = this.props.chanels[this.props.chatId].title

        let MessageArr = []

        messageList.forEach(element => {
            let msg = this.props.messages[element]
            MessageArr.push(<Message key={element} msg = {msg}/>)
        });

        return (
            <div className="msg-wrapper">
                <h2>{header}</h2>
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

const mapStateToProps = ({ chanelsReducer, messageReducer }) => ({
    chanels: chanelsReducer.chanels,
    messages: messageReducer.messages,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect (mapStateToProps, mapDispatchToProps)(Messages);