import React, { Component } from 'react';
import { Form, Container, Col, Button } from 'react-bootstrap';
import EmailIcon from '@material-ui/icons/Email';

import '../styles/register.css';
class Register extends Component {



	render() {
		return (

			<Container className=" div container">
				<Col lg={6} md={8} className="col">
						
					
					<h3 className="h3">Register</h3>
					<hr className="line" />
					
					<Form className="AnonymousPro-font">
						<Form.Group>
							<Form.Label >Username</Form.Label>
							<Form.Control type="text" placeHolder="Enter username" />
							<Form.Text>The username must unique.</Form.Text>
						</Form.Group>
						<Form.Group>
							
							<Form.Label>Email</Form.Label>
							<EmailIcon className="icon" color="secondary" />
							<Form.Control type="email" placeHolder="Enter username" />
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeHolder="Enter username" />
						</Form.Group>
						<Form.Group>
							<Form.Label>Confirm password</Form.Label>
							<Form.Control type="password" placeHolder="Enter username" />
						</Form.Group>
						<Form.Group>
							<Form.Label>Date of birth</Form.Label>
							<Form.Control type="date" />
						</Form.Group>
						<Form.Group id="formGridCheckbox">
							<Form.Check type="checkbox" label="Accept terms and conditions" />
						</Form.Group>

						<Button className="btn" variant="primary" type="submit">
							Submit
  						</Button>
					</Form>
				</Col>
			</Container>
			
		);
	}


}

export default Register;