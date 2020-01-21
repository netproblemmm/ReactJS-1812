import './style.css'
import React, {Component} from 'react'
import {List, ListItem} from 'material-ui/List'
import ContentSend from 'material-ui/svg-icons/content/send'

export default class ChatList extends Component {
    render () {
        return (
            <List>
                <ListItem primaryText="Chat 1" leftIcon={<ContentSend />}></ListItem>
                <ListItem primaryText="Chat 2" leftIcon={<ContentSend />}></ListItem>
                <ListItem primaryText="Chat 3" leftIcon={<ContentSend />}></ListItem>
            </List>
        )
    }
}