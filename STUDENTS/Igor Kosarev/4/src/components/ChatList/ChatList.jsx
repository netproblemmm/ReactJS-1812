import './style.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Item from '../ChatListItem/ListItem.jsx'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  let chats = [{image: "https://i.pravatar.cc/200?img=1", senderName: "Mary", text: "Hi!", id: 1},
  {image: "https://i.pravatar.cc/200?img=2", senderName: "Alex", text: "Hallo man!", id: 2},
  {image: "https://i.pravatar.cc/200?img=3", senderName: "Bill", text: "Whats up?", id: 3},
  {image: "https://i.pravatar.cc/200?img=4", senderName: "Steave", text: "How are you?", id: 4},
  {image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg", senderName: "Elon", text: "Drive Tesla!", id: 5}];


  let ChatListArr = chats.map (chats => <Item Item={ {
        image: chats.image,
        senderName: chats.senderName,
        text: chats.text,
        id: chats.id
} }/>)


  return (
    <List className={classes.root}>

    {ChatListArr}

    </List>
  );
}