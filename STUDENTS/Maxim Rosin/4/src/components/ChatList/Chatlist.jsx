import './style.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'
import { TextField } from 'material-ui'
import AddIcon from 'material-ui/svg-icons/content/add'
import ContentSend from 'material-ui/svg-icons/content/send'


export default class ChatList extends React.Component {
    state = {
        input: '',
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.handleAddChat ()
        }  
    };

    handleAddChat = () => {
        if (this.state.input.length > 0) {
            this.props.addChat (this.state.input);
            this.setState({ input: ' ' });
        }
    }

    render () {
        let { chats } = this.props
        let chatsArr = Object.keys(chats).map(chatId => (
            <Link to = { `/chat/${ chatId }` } key = { chatId }>
                <ListItem primaryText = { chats[chatId].title } leftIcon={<ContentSend />} />
            </Link>
        ))
        return (
            <List>
                { chatsArr }
                <ListItem
                key="Add new chat"
                leftIcon={ <AddIcon />}
                onClick={ this.handleAddChat }
                style={ { height: '60px' } }
                children= {<TextField
                    key="textField"
                    fullWidth
                    name="input"
                    hintText="Добавить новый чат"
                    onChange={ this.handleChange }
                    value={ this.state.input }
                    onKeyUp={ this.handleKeyUp }
                />}
                />
            </List>           
        )
    }
}
