import './style.css'

import React, {Component} from 'react'
import { List, ListItem } from 'material-ui/List'
import ContentSend from 'material-ui/svg-icons/content/send'

import { Link } from 'react-router-dom'

export default class ChatList extends Component {
    render () {
        return (
            <List>
                <Link to = '/chat/1/'>
                    <ListItem primaryText="Chat 1" leftIcon = { <ContentSend /> }></ListItem>
                </Link>
                
                <Link to = '/chat/2/'>
                    <ListItem primaryText="Chat 2" leftIcon = { <ContentSend /> }></ListItem>
                </Link>

                <Link to = '/chat/3/'>
                    <ListItem primaryText="Chat 3" leftIcon = { <ContentSend /> }></ListItem>
                </Link>
            </List>
        )
    }
}