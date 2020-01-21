  
import React, { Component }  from 'react';
import Header from '../Header/Header.jsx'
import PropTypes from 'prop-types';
import ChatList from '../chatList/chatList.jsx'
import Messages from '../Messages/Messages.jsx'
import './style.css'


let user = 'It'

export default class Layout extends Component {
    static propTypes = {
        chatId: PropTypes.number,
    };
 
    static defaultProps = {
        chatId: 1,
    };


    render() {
        return (
            <div>
                <Header/>
                <main className="flex">
                    <ChatList/>
                    <Messages chatId={ this.props.chatId } user={ user }/>
                </main>
            </div>
        )
    }
 }
 