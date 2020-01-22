import React, { Component } from 'react'
import AddIcon from '@material-ui/icons/Add'
import { ListItem } from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'
import { ListItemSecondaryAction } from '@material-ui/core'

export default class AddChat extends Component {
    render () {
        return (
            <ListItem button onClick = { this.props.addChat }>
                <ListItemIcon>
                    <Avatar>
                        <AddIcon />
                    </Avatar>
                </ListItemIcon>
                <ListItemText primary = {'Создать чат'} />
                {/* <ListItemSecondaryAction>
                    <TextField key="addChat" fullWidth name="add-chat" placeholder={'Название чата'} />
                </ListItemSecondaryAction> */}
            </ListItem>
        )
    }
}