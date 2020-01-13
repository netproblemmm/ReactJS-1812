import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

import Message from '../Message'

export default class MessageField extends Component {

		static propTypes = {
				messages: PropTypes.array.isRequired,
				user: PropTypes.object.isRequired,
		};

		render () {
				const { messages, user } = this.props;

				let messageElements = messages.map(( message, index ) => <Message
						key= { index }  //{(new Date().getTime()) * Math.random()}
						sender={ message.sender }
						text={ message.text }
						align={ user.userName == message.sender ? 'flex-end' : 'flex-start' }
				/>);

				return (
						<div className="messageField" id='messageField'>

										{ messageElements }

						</div>
				)
		}
}