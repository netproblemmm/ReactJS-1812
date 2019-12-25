import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

import Message from '../Message'

export default class MessageField extends Component {

		static propTypes = {
				messages: PropTypes.array.isRequired,
		};

		render () {
				const { messages } = this.props;

				let messageElements = messages.map(message => <Message
						key={(new Date().getTime()) * Math.random()}
						text={ message } />);

				return (
						<div className="messageField">

										{ messageElements }

								{/*<Button*/}
										{/*variant="contained"*/}
										{/*onClick={() => this.handleClick()}*/}
										{/*color="secondary"*/}
										{/*className={classes.button}*/}
										{/*endIcon={<Send/>}*/}
								{/*>*/}
										{/*Send*/}
								{/*</Button>*/}
						</div>
				)
		}
}