import React, {Component} from 'react'

import Message from '../Message/Message.jsx'
import MessageInput from '../MessageInput/MessageInput.jsx'
import RobotQuestion from '../Robot/RobotQuestion.jsx'
import RobotAnswer from '../Robot/RobotAnswer.jsx'

export default class Messages extends Component {
    constructor (props) {
        super (props)

        this.state = {
            messages: [],
            message: ''
        }
    }

    handleFieldChange = value => {
        this.setState ({ message: value})
    }

    sendMessage = message => {
        this.setState ({
            messages: [...this.state.messages, message]
        })
    }

    render () {
        let messagesArr = this.state.messages      

        let messages = messagesArr.map ((message, i) => 
        <div key={ i }  className={'col-12'}>
            <Message msg={ message } user={ this.props.user } />
            { i > 1 && <RobotAnswer /> }
        </div>
        )

        return (
                <div className={'row col-md-9 align-items-end h-100 overflow-auto'}>
                    <div className={'row justify-content-center'}>
                        <RobotQuestion />
                        { messages }
                        <MessageInput onChange = {this.handleFieldChange} onClick={ this.sendMessage } />
                    </div>
                </div>
        )
    }
}