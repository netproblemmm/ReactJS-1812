
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Menu from './Menu/Menu.jsx'
import style from './style.scss'

let header = (props) => {
    return (
        <div className="header-container">
            <Menu />
            <div className="header-container__app-info">
                <h1 className="header-container__app-name">Телега</h1>
            </div>
        </div>
    )
}

export default header