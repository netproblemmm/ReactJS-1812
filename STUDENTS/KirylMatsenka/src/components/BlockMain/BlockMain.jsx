import React, {Component} from 'react'
import Conversations from '../Conversations/Conversations.jsx'
import Messages from '../Messages/Messages.jsx'
import Grid from '@material-ui/core/Grid'


export default class BlockMain extends Component {
    constructor (props) {
        super (props)
    }
    render () {
        return (
            <Grid 
            container
            spacing={4} 
            direction={'row'} 
            style={{height: 'calc(100vh - 50px)'}}
            >
                <Conversations />
                <Messages user={ this.props.user } />
            </Grid>
        )
    }
}