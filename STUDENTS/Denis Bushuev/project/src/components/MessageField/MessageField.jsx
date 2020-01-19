import React from 'react';
import PropTypes from 'prop-types';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from '../Message/Message.jsx';
import './style.css';

export default class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
    };

    state = {
        chats: {
            1: {title: 'Чат 1', messageList: [1]},
            2: {title: 'Чат 2', messageList: [2]},
            3: {title: 'Чат 3', messageLis: []},
        },
        messages: {
            1: { text: "Привет!", sender: 'bot' },
            2: { text: "Привет!", sender: 'bot' }
        },
        input: ''
    };

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;
        if(Object.keys(prevState.messages).length < Object.keys(messages).length && Object.values(messages)[Object.values(messages).length - 1].sender === 'user') {
            setTimeout(() =>
                this.handleSendMessage('Привет!', 'bot'),
            1000);
        }
    };

    randomBot() {
        if(this.state.messages.length < 4) {
            return "У меня пока мало диалогов, но думаю в скором времени это исправят =)";
        } else {
            let randBot = ["Ну что тебе еще надо?", "Знаешь, Я думаю, что WoW самая лучшая ммо =)", "Знаешь Я думаю не стоит писать белиберду =)", "Я смотрю ты хороший собеседник", "Ищешь баги? Я только за!", "Оставь обо мне отзыв =)"];
            return(randBot[Math.floor(Math.random() * randBot.length)]);
        }
    }

    handleSendMessage = (message, sender) => {
        const { messages, chats, input } = this.state;
        const { chatId } = this.props;

        if(input.length > 0 || sender === 'bot') {
            const messageId = Object.keys(messages).length + 1;
            this.setState({
                messages: {...messages, [messageId]: {text: message, sender: sender}},
                chats: {...chats, [chatId]: {...chats[chatId], messageList: [...chats[chatId]['messageList'], messageId]}},
            })
        }
        if(sender === 'user') {
            this.setState({ input: '' })
        }
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleKeyUp = (event) => {
        if(event.keyCode === 13) {
            this.handleSendMessage(this.state.input, 'user')
        }
    };

    render() {
        const { messages, chats } = this.state;
        const { chatId } = this.props;
        const messageElements = chats[chatId].messageList.map((messageId, index) => (
            <Message 
                key={ index }
                text={ messages[messageId].text }
                sender={ messages[messageId].sender }
            />
        ));

        return <div className="message-head">
            <h1>MyChat</h1>
            <div key="messageElements" className="message-field">
                { messageElements }
            </div>
            <div key="textInput" className="allSend">
                <TextField
                    name="input"
                    fullWidth={ true } 
                    className="inputSend"
                    hintText="Введите сообщение"
                    onChange={ this.handleChange }
                    value={ this.state.input }
                    onKeyUp={ this.handleKeyUp } 
                />
                <FloatingActionButton 
                    className="btnSend"
                    onClick={ () => this.handleSendMessage(this.state.input, 'user') }>
                        <SendIcon />
                    </FloatingActionButton>
            </div>
        </div>
    }
}