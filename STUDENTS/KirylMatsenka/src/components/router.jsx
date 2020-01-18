import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'

export default class Router extends Component {
    constructor (props) {
        super (props)

        this.state = {
            chats: [ { id: 1, messages: [] },
                     { id: 2, messages: [] },
                     { id: 3, messages: [] }
          ]
        }
    }

    addChat () {
        let id = this.state.chats.length
        this.setState ({
            chats: [...this.state.chats, { id: ++id, messages: []}]
        })
    }

    render () {
        return (
            <Switch>
                <Route exact path = "/" component = { 
                    (props) => <Layout 
                                {...props} 
                                chat = { 1 }
                                chats = { this.state.chats }
                                addChat = { () => this.addChat () } 
                                /> 
                                } />
                <Route exact path = "/chat/:id"
                 chats = { this.state.chats } 
                 render = {(props) => <Layout {...props} chat = { props.match.params.id } chats = { this.state.chats }  /> } />
            </Switch>
        )
    }
}