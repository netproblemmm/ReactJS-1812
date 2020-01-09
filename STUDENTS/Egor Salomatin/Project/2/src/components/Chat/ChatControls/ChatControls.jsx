import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import style from './ChatControls.scss'

export default class ChatControls extends Component {
    render () {

        return (
            <div className="chat-controls">
                <form className="chat-controls-form">
                    <input type="text" className="chat-controls-form__text-input" value="Сообщение"/>
                    <button className="chat-controls-form__button-send">Отправить</button>
                </form>
            </div>
        )
    }
}