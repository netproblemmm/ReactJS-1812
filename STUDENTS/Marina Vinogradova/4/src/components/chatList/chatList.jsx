import React, { Component } from 'react'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from '@material-ui/core';
import '../chatList/style.css'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
// import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from '@material/list'



export default class ChatList extends Component {

    render() {
        return (
            <div className="chat-list-full">
                
                <div className="chat-list">
                    <List >
                        <Link to="/chat/1/" >
                            <ListItem alignItems="flex-start" className="cursor">
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Brunch this weekend?"
                                    secondary="It was rainy last time"
                                />
                            </ListItem>
                        </Link>

                        <Divider variant="inset" component="li" />
                    
                        <Link to="/chat/2/">
                            <ListItem alignItems="flex-start" className="cursor">
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Birthday party"
                                    secondary="I'll be in a picachu suite bringing balloons"
                                />
                            </ListItem> 
                        </Link> 
                        
                        <Divider variant="inset" component="li" />
                    
                        <Link to="/chat/3/">
                            <ListItem alignItems="flex-start" className="cursor">
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Tres amigos"
                                    secondary="Spanish lessons"
                                />
                            </ListItem> 
                        </Link> 
                    </ List>
                </div>
            </div>
        )
    }

}
