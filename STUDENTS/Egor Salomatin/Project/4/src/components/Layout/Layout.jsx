import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Messages from '../Messages/Messages.jsx'
import Header from '../Header/header.jsx'
import Chanels from '../Chanels/Chanels.jsx'
import Footer from '../Footer/footer.jsx'
import PropTypes from 'prop-types'

let user = 'It'

export default class Layout extends Component {
    static propTypes = {
        chatId: PropTypes.number
    }

    static defaultProps = {
        chatId: 1
    }
    
    constructor(props) {
        super(props)

        this.addMessage = this.addMessage.bind(this);

        this.state = {
            chanels: { 
                1: {name: 'Top Coding', secondaryText: 'New coding tasks!', messagesIds: []},
                2: {name: 'Cooking', secondaryText: 'Best recepies!', messagesIds: []},
                3: {name: 'WebDev', secondaryText: 'Web Development', messagesIds: []}
             },
        }
    }

    addMessage(msgid) {
        this.setState(function(state, props) {
                state.chanels[this.props.chatId].messagesIds.push(msgid);
                return( state )
            } 
        )
        console.log(this.state)
    }

    render() {

        let { chatId } = this.props


        return (
            <Grid container spacing={3}>
                <Grid item container xs={12}>
                    <Header/>
                </Grid>
                <Grid item xs={3}>
                    <Chanels chanels = {this.state.chanels}/>
                </Grid>
                <Grid item xs={9}>
                    <Messages user={ user } messagesIds = {this.state.chanels[chatId].messagesIds} addMessage={this.addMessage}/>
                </Grid>
                <Grid item xs={12}>
                    <Footer/>
                </Grid>
            </Grid>
        )
    }
}