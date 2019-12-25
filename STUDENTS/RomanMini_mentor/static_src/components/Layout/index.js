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
				messages : ['Привет', 'Как дела?'],
		};

		handleChange = (event) => {
				this.setState({ [event.target.name]: event.target.value });
		};

		handleKeyUp = (event) => {
				console.log(event.keyCode);
				if (event.keyCode === 13) { // Enter
						this.handleSendMessage( this.state.input );
				}
		};

		handleSendMessage (message) {
				let botMessage = message;
				this.setState(state => ({
								messages: state.messages.concat(botMessage),
						})
				);
				this.setState({ input: '' });
		};

		render () {
				const { messages } = this.state;

				const classes = this.props;

				return (
						<React.Fragment>
								<CssBaseline />
								<Container maxWidth="md">
										<Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
												<div className="container">
														<Navigation/>
														<MessageField messages = { messages } />
														<form style={{display: 'flex'}}>
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
																		onKeyUp={this.handleKeyUp }
																		value={ this.state.input }
																/>
																<Button
																		variant="contained"
																		onClick={() => this.handleSendMessage(this.state.input)}
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