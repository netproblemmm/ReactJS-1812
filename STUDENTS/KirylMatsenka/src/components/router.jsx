import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'

export default class Router extends Component {
    render () {
        return (
            <Switch>
                <Route exact path = "/" component = { (props) => <Layout {...props} /> } />
                <Route exact path = "/chat/:id" 
                 render = {(props) => <Layout {...props} chat = { +props.match.params.id } /> } />
            </Switch>
        )
    }
}