import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class Message extends Component {

		static propTypes = {
				sender: PropTypes.string.isRequired,
				text : PropTypes.string.isRequired,
				align: PropTypes.string.isRequired,
		};

		render = () => <div
				style={{ alignSelf: this.props.align }}
				className="message" >from: { this.props.sender } text: { this.props.text } </div>
}