import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class Register extends Component {

	render() {
		return (
			<Form>
				<Form.Group>
					<Form.Label>
						Username
					</Form.Label>
					<Form.Control type="text" placeHolder="Enter username" />
					<Form.Text>The username must be unique.</Form.Text>
				</Form.Group>
			</Form>
		);
	}


}

export default Register;