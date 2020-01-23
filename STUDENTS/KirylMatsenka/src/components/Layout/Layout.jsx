import React, { Component } from 'react'

import Container from '@material-ui/core/Container'
import BlockMain from '../BlockMain/BlockMain.jsx'
import Header from '../Header/Header.jsx'
import PropTypes from 'prop-types'

export default class Layout extends Component {
    static propTypes = {
        chat: PropTypes.number
    }

    static defaultProps = {
        chat: 1
    }

    render () {
        return (
            <Container maxWidth="lg">
                <Header />
                <BlockMain {...this.props} />
            </Container>
        )
    }
}