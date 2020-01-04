import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import style from './style.scss'

let footer = (props) => {
    return (
        <div className="footer-container">
            <p className="footer-container__text">
                <a href="https://geekbrains.ru/" className="link">GeekBrains</a>
                &copy; Все права защищены.
            </p>
        </div>
    )
}

export default footer