import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { TextField } from '@material-ui/core'
import HeaderButton from '../HeaderButton/HeaderButton.jsx'



export default class Header extends Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <div>
                <header>
                <div className="head-chat-list">
                <HeaderButton/>
                <TextField id="outlined-basic" variant="outlined" size="small" />
                </div>
                </header>
            </div>
        )
    }
}