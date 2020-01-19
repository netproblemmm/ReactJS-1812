import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { ListItem } from '@material-ui/core';
import '../chatPreview/style.css'


export default class ChatPreview extends Component {
    constructor (props) {
        super (props)
        this.state = ''
    }

    render() {
        return (
            <ListItem fullWidth={true}>
            <div className="chat-preview-card">
                <div className="chat-preview-img">
                    <img src="http://placehold.it/50x50" alt=""/>
                </div>
                <div className="chat-preview-desc">
                    <h3>Chat Name</h3>
                    <p>Last message</p>
                </div>
            </div>
            </ListItem>
        )
    }

}
