import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'
// import 'style-loader!css-loader?modules!./messageField.css'
export default class Message extends Component {

		static propTypes = {
				text : PropTypes.string.isRequired,
		};

		// defaultProps = {
		// 		text: '',
		// };


		render = () => <div className="message">{ this.props.text }</div>
}