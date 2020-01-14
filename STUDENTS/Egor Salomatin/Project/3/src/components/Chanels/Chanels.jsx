import React, {Component} from 'react'
import List from '@material-ui/core/List';
import Chanel from '../Chanel/Chanel.jsx'

export default class Chanels extends Component {
    constructor(props) {
        super(props)

        this.state = {
            chanels: [
                {name: 'Top Coding', secondaryText: 'New coding tasks!'},
                {name: 'Cooking', secondaryText: 'Best recepies!'}
            ]
        }
    }

    render() {
        let { chanels } = this.state

        let ChanelsList = chanels.map((chanel) => <Chanel chanel={ {
            name: chanel.name, 
            text: chanel.secondaryText
        } } />)

        return (
            <List>
                { ChanelsList }
            </List>
        )
    }
}