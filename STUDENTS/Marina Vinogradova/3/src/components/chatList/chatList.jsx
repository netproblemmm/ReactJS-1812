import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { TextField, Fab } from '@material-ui/core'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from '@material-ui/core';
import ChatPreview from '../chatPreview/chatPreview.jsx'
import '../chatList/style.css'
import { makeStyles } from '@material-ui/core/styles';

export default class ChatList extends Component {
    constructor (props) {
        super (props)
        this.state = ''
    }

    render() {
        return (
            <div className="chat-list-full">
                <div className="head-chat-list">
                <TextField id="outlined-basic" variant="outlined" fullWidth={true} size="small" />
                </div>
                <div className="chat-list">
                    <List>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary="It was rainy last time"
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Birthday party"
                            secondary="I'll be in a picachu suite bringing balloons"
                        />
                    </ListItem>  
                        {/* сюда будут прокидываться сами чатики по одному компоненту */}
                    </ List>
                </div>
            </div>
        )
    }

}
