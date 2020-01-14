import React from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from '../Message/Message.jsx';
import './style.css';

export default class MessageField extends React.Component {
    constructor(props) {
        super(props);
        // Создание ref в поле 'textInput'
        this.textInput = React.createRef();
    }

    state = {
        messages: [
            { text: "Привет!", sender: 'bot' },
            { text: "Как дела?", sender: 'bot' }
        ],
        input: '',
    };

    // Фокус на input
    componentDidMount() {
        this.textInput.current.focus();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.messages.length < this.state.messages.length && this.state.messages[this.state.messages.length - 1].sender === 'user') {
            setTimeout(() => this.setState(
                { messages: [...this.state.messages, { text: this.randomBot(), sender: 'bot' }] }
            ), 1000);
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

    handleClick = (message) => {
        this.sendMessage(message);
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleKeyUp = (event, message) => {
        if(event.keyCode === 13) { // Равен Enter
            this.sendMessage(message);
        }
    };

    sendMessage = (message) => {
        this.setState({ messages: [ ...this.state.messages, { text: message, sender: 'user' } ],
        input: '',
    })
    };

    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message key={ index } text={ message.text } sender={ message.sender }/>
        ));

        return <div className="layout">
            <h1>MyChat</h1>
            <div className="message-field">
                { messageElements }
            </div>
            <div className="allSend">
                <TextField
                    ref={ this.textInput }
                    name="input"
                    fullWidth={ true } 
                    className="inputSend"
                    hintText="Введите сообщение"
                    onChange={ this.handleChange }
                    value={ this.state.input }
                    onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) } />
                <FloatingActionButton 
                    className="btnSend"
                    onClick={ () => this.handleClick(this.state.input) }>
                        <SendIcon />
                    </FloatingActionButton>
            </div>
        </div>
    }
}