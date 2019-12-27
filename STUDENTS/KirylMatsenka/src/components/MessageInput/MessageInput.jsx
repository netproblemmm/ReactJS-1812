import React, {Component} from 'react'

export default class InputField extends Component {
    constructor (props) {
        super (props)

        this.state = {
            message: ''
        }
    }

    handleChangeMessage = e => {
        this.setState({message: e.target.value})
        this.props.onChange(e.target.value)
    }

    sendMessage = () => {
        this.props.onClick (this.state.message)
    }

    render () {

        return (
            <div className={'row col-12'} >
                <input 
                type="text"
                className={'form-control col-md-8'}
                value={this.state.message} 
                onChange={ this.handleChangeMessage }/>
                <button 
                className={'col-md-4 btn btn-dark'} 
                onClick={ this.sendMessage } >Пошлём</button>
            </div>
        )
    }
}