import React, {Component} from 'react'
import MessageField from '../MessageField/MessageField.jsx'
import Header from '../Header/Header.jsx'
import ChatList from '../ChatList/ChatList.jsx'

import './style.css'

let user = 'It'

export default class Layout extends Component {
    render () {
        return (
            <div className="d-flex justify-content-center w-100 layout">
                <Header />
                <div className="d-flex justify-content-center w-100 layout-left-side">
                    <div className="pr-5 w-30">
                        <ChatList />
                    </div>
                    <div className="d-flex justify-content-center w-100 layout-right-side">
                        <MessageField user = {user}/>
                    </div>
                </div>
            </div>
        )
    }
}
