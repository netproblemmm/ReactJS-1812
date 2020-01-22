import React, {Component} from 'react'
import Messages from '../Messages/Messages.jsx'
import Header from '../Header/Header.jsx'
import ChatList from '../ChatList/ChatList.jsx'
import PropTypes from 'prop-types'

import './style.css'

export default class Layout extends Component {
    static propTypes = {
        chatId: PropTypes.number
    }

    static defaultProps = {
        chatId: 1
    }

    render () {
        return (
            <div className="d-flex justify-content-center w-100 layout">
                <Header chatId = {this.props.chatId}/>
                <div className="d-flex justify-content-center w-100 layout-left-side">
                    <div className="pr-5 w-30">
                        <ChatList />
                    </div>
                    <div className="d-flex justify-content-center w-100 layout-right-side">
                        <Messages chatId = {this.props.chatId}/>
                    </div>
                </div>
            </div>
        )
    }
}
