import React, {Component} from 'react'

export default class RobotAnswer extends Component {
    constructor (props) {
        super (props)

        this.state = {
            answer: 'Ваш звонок очень важен для нас!'
        }
    }

    render () {
        return (
            <div>
                { this.state.answer }
            </div> 
        )
    }
}