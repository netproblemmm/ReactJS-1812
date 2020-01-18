import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'

export default class Chat extends Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <ListItem button onClick = { () => { this.props.addChat () } }>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" />
                </ListItemAvatar>
                <ListItemText primary = { this.props.primary } secondary = { this.props.secondary } />
            </ListItem>
        )
    }
}