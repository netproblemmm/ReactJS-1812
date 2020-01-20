import React, {Component} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Chat from '../Chat/Chat.jsx'
import List from '@material-ui/core/List'
import { Link } from 'react-router-dom'


let useStyles = makeStyles (theme => ({
    paper: {
        textAlign: 'center'
    }
})) 

let conversations = (props) => {
    let classes = useStyles ()

    let chats = props.chats.map ((chat, i) =>
        <Link key = { i } to = { `/chat/${ chat.id }` }> 
            <Chat primary = { `Chat ${ chat.id }`} secondary = { 'Some text' } />
        </Link>
    )

    return (
        <Grid container item xs={3}>
            <List>
                <Chat primary = 'Создать чат' secondary = { 'Some text' } addChat = { () => { props.addChat () } } />
                { chats }
            </List>
            {/* <Paper className={classes.paper}>У нас нет бесед сейчас</Paper> */}
        </Grid>
    )
}

export default  conversations