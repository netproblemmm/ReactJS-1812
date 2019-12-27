import React, {Component} from 'react'

import Conversations from '../Conversations/Conversations.jsx'
import Messages from '../Messages/Messages.jsx'

export default class BlockMain extends Component {
    constructor (props) {
        super (props)
    }
    render () {
        return (
            <main className={'row h-75'}>
                <Conversations />
                <Messages user={ this.props.user } />
            </main>
        )
    }
}