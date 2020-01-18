import './style.css'
import React, {Component} from 'react'

export default class Header extends Component {
    render () {
        return (
            <div className = "header">
                <h1> RoskomGram </h1>
                <h2> Chat { this.props.chatId } </h2>
            </div>
        )
    }
}