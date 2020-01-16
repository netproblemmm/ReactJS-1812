import React, {Component} from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import { Link } from 'react-router-dom'
import style from './style.css'

let Chanel = (props) => {
    let {name, text, index} = props.chanel
    return (
        <Link className="chanel-link" to={`/chat/${index}/`}>
            <ListItem className="chanel">
                <ListItemAvatar>
                    <Avatar alt={name} src="https://via.placeholder.com/100" />
                </ListItemAvatar>
                <ListItemText textDecoration="none" primary={name} secondary={text}/>
            </ListItem>
        </Link>
    )
}

export default Chanel