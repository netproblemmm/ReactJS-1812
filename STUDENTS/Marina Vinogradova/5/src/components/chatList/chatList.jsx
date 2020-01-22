import React, { Component } from 'react'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, TextField } from '@material-ui/core';
import '../chatList/style.css'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
// import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from '@material/list'
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';

//store
import { addChat } from '../../actions/chat_actions.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ChatList extends Component {

    state = {
        input: '',
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
 
    handleKeyUp = (event) => {
        if (event.keyCode === 13) { // Enter
            this.handleAddChat();
        }
    }
 
    handleAddChat = () => {
        if (this.state.input.length > 0) {
            this.props.addChat(this.state.input);
            this.setState({ input: '' });
        }
    }

    render() {

        let { chats } = this.props
        let chatsArr = Object.keys(chats).map(chatId => (
            <Link to = { `/chat/${ chatId }` } key = { chatId }>
                <ListItem  divider={true}>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary={ chats[chatId].title } secondary="It was rainy last time"/>
                </ListItem>
                {/* <ListItem 
                    primary = { chats[chatId].title }
                    alignItems="flex-start" 
                    className="cursor"
                    key="Add new chat"
                    onClick={ this.handleAddChat }
                    children= {<TextField
                        key="textField"
                        fullWidth
                        name="input"
                        hintText="Добавить новый чат"
                        onChange={ this.handleChange }
                        value={ this.state.input }
                    onKeyUp={ this.handleKeyUp }/>} >
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary="Brunch this weekend?" secondary="It was rainy last time"/>
                </ListItem> */}
            </Link>
        ))

        return (
            <div className="chat-list-full">
                
                <div className="chat-list">
                    <List >
                    { chatsArr }
                    <div className="type-bottom">
                            <ListItem 
                                alignItems="flex-start" 
                                className="cursor new-chat"
                                key="Add new chat"
                                onClick={ this.handleAddChat }
                                children= {<TextField
                                    className="mdc-text-field--with-leading-icon"
                                    key="textField"
                                    fullWidth = {true}
                                    name="input"
                                    label="Create a new chat"
                                    onChange={ this.handleChange }
                                    value={ this.state.input }
                                    onKeyUp={ this.handleKeyUp }
                                />}>

                            </ListItem>
                            </div> 
                    </ List>
                </div>
            </div>
        )
    }

}


let mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats
})

let mapDispatchToProps = dispatch => bindActionCreators ({ addChat }, dispatch)

export default connect (mapStateToProps, mapDispatchToProps) (ChatList)