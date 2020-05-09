import React, { Component } from 'react';
import { Form, Container, Col, Button } from 'react-bootstrap';
import EmailIcon from '@material-ui/icons/Email';

import '../styles/register.css';
class Register extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			first_name: '',
			last_name: '',
			password: '',
			email: '',
			date_birth: '',
			errorMessage: '',
			confirm: false,
			ready: false,
		}
	}


	onUsernameChange = (event) => {
		this.setState({ username: event.target.value });
	}
	onFirstNameChange = (event) => {
		this.setState({ first_name: event.target.value });
	}
	onLastNameChange = (event) => {
		this.setState({ last_name: event.target.value });
	}
	onEmailChange = (event) => {
		this.setState({ email: event.target.value });
	}
	onDateBirthChange = (event) => {
		this.setState({ date_birth: event.target.value })
	}
	onDateBirthChange = (event) => {
		this.setState({ date_birth: event.target.value })
	}
	onPasswordChange = (event) => {
		this.setState({ password: event.target.value });
	}
	onPasswordConfirmChange = (event) => {
		let confirmPass = event.target.value;
		if (this.state.password !== confirmPass) {
			this.setState({
				errorMessage: 'password does not match',
				confirm: false,
			});
		}
		else {
			this.setState({
				errorMessage: '',
				confirm: true,
			});
		}
	}

	isFormValidate() {
		const { first_name, last_name, username, email, password, confirm } = this.state;

		if (this.isEmpty(username) || this.isEmpty(first_name) || this.isEmpty(last_name) || this.isEmpty(password) || this.isEmpty(email) || !confirm) {
			return false
		}
		else {
			return true;
		}
	}

	isEmpty(text) {
		if (text.trim() === '') {
			return true;
		}
	}

	onSubmitForm = (event) => {
		event.preventDefault();
		if (this.isFormValidate()) {
			const { first_name, last_name, username, email, password, date_birth } = this.state;
			console.log(this.state);
			fetch('http://localhost:3000/register', {
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					username: username,
					first_name: first_name,
					last_name: last_name,
					email: email,
					password: password,
					date_birth: date_birth,
				})
			}).then(response => response.json())
				.then(user => {
					if (user) {
						this.props.setUser(user);
						this.props.history.push('/');
					}
				})
		}
		else {

		}
	}


	render() {
		return (
			<Container className=" div container">
				<Col lg={6} md={8} className="col">

					<h3 className="h3">Register</h3>
					<hr className="line" />

					<Form className="AnonymousPro-font">
						<Form.Group className="name">
							<Form.Label>First Name</Form.Label>
							<Form.Control type="text" onChange={this.onFirstNameChange} required />
						</Form.Group>
						<Form.Group className="name lastname">
							<Form.Label>Last Name</Form.Label>
							<Form.Control type="text" required onChange={this.onLastNameChange} />
						</Form.Group>
						<Form.Group>
							<Form.Label >Username</Form.Label>
							<Form.Control type="text" required onChange={this.onUsernameChange} />
							<Form.Text>The username must unique.</Form.Text>
						</Form.Group>
						<Form.Group>
							<Form.Label>Email</Form.Label>
							<EmailIcon className="icon" color="secondary" />
							<Form.Control type="email" required onChange={this.onEmailChange} />
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" required onChange={this.onPasswordChange} />
						</Form.Group>
						<Form.Group>
							<Form.Label>Confirm password</Form.Label>
							<Form.Control type="password" onChange={this.onPasswordConfirmChange} required />
							<Form.Text>{this.state.errorMessage}</Form.Text>
						</Form.Group>
						<Form.Group>
							<Form.Label>Date of birth</Form.Label>
							<Form.Control type="date" required onChange={this.onDateBirthChange} />
						</Form.Group>
						<Form.Group id="formGridCheckbox">
							<Form.Check type="checkbox" label="Accept terms and conditions" />
						</Form.Group>
						<Button className="btn" variant="primary" type="submit" onClick={this.onSubmitForm}>
							Submit
  						</Button>
					</Form>
				</Col>
			</Container>

		);
	}


}

export default Register;