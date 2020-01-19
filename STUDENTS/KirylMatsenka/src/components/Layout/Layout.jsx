import React, { Component } from 'react'

import Container from '@material-ui/core/Container'
import BlockMain from '../BlockMain/BlockMain.jsx'
import Header from '../Header/Header.jsx'

let user = { id: 1, name: 'Вася' }

export default class Layout extends Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <Container maxWidth="lg">
                <Header />
                <BlockMain {...this.props} user={ user } addChat = { () => { this.props.addChat () }}  />
            </Container>
        )
    }
}