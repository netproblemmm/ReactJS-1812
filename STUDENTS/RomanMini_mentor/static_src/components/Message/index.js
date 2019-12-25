import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class Message extends Component {

		static propTypes = {
				text : PropTypes.string.isRequired,
		};

		render = () => <div className="message">{ this.props.text }</div>
}