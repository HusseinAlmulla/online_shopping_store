import React, { Component } from 'react';

class Error extends Component {
	render() {
		return (
			<div style={{
				color: 'blue',
				textAlign: 'center'
			}}>
				{this.props.msg}
			</div>
		)
	}
}

export default Error;