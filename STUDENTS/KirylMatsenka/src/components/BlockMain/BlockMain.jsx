import React, {Component} from 'react'
import ChatList from '../ChatList/ChatList.jsx'
import Messages from '../Messages/Messages.jsx'
import Grid from '@material-ui/core/Grid'

export default class BlockMain extends Component {

    render () {
        return (
            <Grid 
            container
            spacing={4} 
            direction={'row'} 
            style={{height: 'calc(100vh - 50px)'}}
            >
                <ChatList {...this.props} />
                <Messages {...this.props} />
            </Grid>
        )
    }
}