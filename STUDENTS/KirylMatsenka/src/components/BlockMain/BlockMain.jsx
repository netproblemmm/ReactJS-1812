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
                <Conversations {...this.props} addChat = { () => { this.props.addChat () } } />
                <Messages {...this.props} />
            </Grid>
        )
    }
}