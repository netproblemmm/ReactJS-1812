import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Chat from '../Chat/Chat.jsx'
import AddChat from '../Chat/AddChat.jsx'
import List from '@material-ui/core/List'
import { Link } from 'react-router-dom'

import { addChat } from '../../actions/chat_actions.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class ChatList extends Component {
    constructor (props) {
        super (props) 
    }
 
    addChat = () => {
        this.props.addChat ()
    }

    render () {
        let chats = Object.keys (this.props.chats).map (id =>
            <Link key = { id } to = { `/chat/${ id }` }> 
                <Chat primary = { this.props.chats[id].title } secondary = { 'Some text' } />
            </Link>
        )
        return (
            <Grid container item xs={3}>
            <List>
                <AddChat primary = 'Создать чат' secondary = 'Some text' addChat = { this.addChat } />
                { chats }
            </List>
        </Grid>
        )
    }
} 

let mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats
})

let mapDispatchToProps = dispatch => bindActionCreators ({ addChat }, dispatch)

export default connect (mapStateToProps, mapDispatchToProps) (ChatList)