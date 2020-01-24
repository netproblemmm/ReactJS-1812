import React, {Component} from 'react'
import List from '@material-ui/core/List'
import Chanel from '../Chanel/Chanel.jsx'
import style from './style.css'

export default class Chanels extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        let { chanels } = this.props

        console.log(chanels);

        let ChanelsList = [];

        for (let key in chanels) {
            ChanelsList.push(<Chanel chanel = {
                {
                    name: chanels[key].name,
                    text: chanels[key].secondaryText,
                    index: key
                }
            } />)
        } 

        return (
            <div className="chanels-wrap">
                <List>
                    { ChanelsList }
                </List>
            </div>
        )
    }
}