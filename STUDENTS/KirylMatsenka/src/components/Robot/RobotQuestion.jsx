import React, {Component} from 'react'

export default class RobotQuestion extends Component {
    constructor (props) {
        super (props)

        this.state = {
            question: 'Чем я могу вам помочь?'
        }
    }

    render () {
        return (
            <div className={'col-12'}>
                { this.state.question }
            </div>  
        )
    }
}