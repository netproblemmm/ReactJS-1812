import React, {Component} from 'react'

export default class Conversations extends Component {
    constructor (props) {
        super (props)
    }
    render () {
        return (
            <div className={'col-md-3 border-right d-flex align-items-center'}>
                <span className={'text-center'}>У нас нет бесед сейчас</span>
            </div>
        )
    }
}