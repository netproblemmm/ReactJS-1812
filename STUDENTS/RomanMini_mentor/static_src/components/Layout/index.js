import React, { Component } from 'react'
// import PropTypes from 'prop-types'

//*** material-Ui
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import Send from '@material-ui/icons/Send'

import MessageField from '../MessageField'
import Navigation from '../Navigation'

import './style.css'

const useStyles = theme => ({
		button: {
				margin: theme.spacing(5),
		},
});

class Layout extends Component {

		state = {
				input : '',
				user: {
						userName: 'Fred',
						email: '',
				},
				messages : [
						{sender: 'Fred', text: 'Привет'},
						{sender: 'Fred', text: 'Как дела?'}
				],
		};

		componentDidUpdate (prevProps, prevState) {
				let prevLength = prevState.messages.length;
				let stateLength = this.state.messages.length;

				if( prevLength < stateLength
						&& this.state.messages[stateLength -1].sender === this.state.user.userName ) {
						setTimeout( () => this.sendMessage('AngryBot', 'I`am Robot'), 1000);
				}

				document.getElementById('messageField').scrollTop = 9999;
		}

		handleChange = (event) => {
				this.setState({ [event.target.name]: event.target.value });
		};

		handleKeyUp = ( event, message ) => {
				if (event.keyCode === 13) { // Enter
						this.handleSendMessage( message );
				}
		};

		sendMessage = ( sender, message) => {
				let text = message;
				if( text !== '') {
						this.setState({
								messages: [...this.state.messages, { sender, text}],
								input: '',
						});
				}
		};

		handleSendMessage = (message) => {
				this.sendMessage ( this.state.user.userName, message );
		};

		onSubmit = (e) => { // предотвращаем перезагрузку сстраницы тк у нас form
				e.preventDefault();
		};

		render () {
				const { messages, input, user  } = this.state;

				const classes = this.props;

				return (
						<React.Fragment>
								<CssBaseline />
								<Container maxWidth="md">
										<Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
												<div className="container">
														<Navigation/>
														<MessageField
																user={ user }
																messages = { messages } />
														<form style={{display: 'flex'}} onSubmit={this.onSubmit} method="post">
																<TextField
																		id="outlined-full-width"
																		label="Chat message"
																		style={{ margin: 0 }}
																		placeholder="Enter yur message"
																		helperText=""
																		fullWidth
																		margin="normal"
																		InputLabelProps={{
																				shrink: true,
																		}}
																		variant="outlined"
																		name='input'
																		onChange={ this.handleChange }
																		onKeyUp={( event ) => this.handleKeyUp(event, input) }
																		autoFocus={true}
																		value={ this.state.input }
																/>
																<Button
																		variant="contained"
																		onClick={() => this.handleSendMessage( input)}
																		color="secondary"
																		className={classes.button}
																		endIcon={<Send/>}
																>
																		Send
																</Button>

														</form>
												</div>
										</Typography>
								</Container>
						</React.Fragment>
				)
		}

}

export default withStyles(useStyles)(Layout);