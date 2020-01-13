import React, {Component} from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


let Chanel = (props) => {
    let name = props.chanel.name
    let text = props.chanel.text
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar alt={name} src="https://via.placeholder.com/100" />
            </ListItemAvatar>
            <ListItemText primary={name} secondary={text}/>
        </ListItem>
    )
}

export default Chanel