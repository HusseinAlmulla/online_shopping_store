import React, { Component } from 'react';
import { Form, Container, Col, Button } from 'react-bootstrap';
import EmailIcon from '@material-ui/icons/Email';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import '../styles/register.css';
import { requestUserLoginAction } from '../Actions.js';

// const mapStateToProps = (state) => {
// 	return {
// 		user: state.requestUserLoginReducer.user,
// 		error: state.requestUserLoginReducer.error,
// 		isPending: state.requestUserLoginReducer.isPending
// 	}
// }

const mapDispatchToProps = (dispatch) => {
	return {
		onRequestLogin: (email, password) => dispatch(requestUserLoginAction(email, password))
	}
}

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			password: '',
			email: '',
		}
	}

	onEmailChange = (event) => {
		this.setState({ email: event.target.value });
	}

	onPasswordChange = (event) => {
		this.setState({ password: event.target.value });
	}
	submitLogin = () =>{
		this.props.onRequestLogin(this.state.email, this.state.password); 
		this.props.history.push("/");
	}

	render() {
		return (
			<Container className=" div container">
				<div className="errorMessage">{this.state.errorMessage}</div>
				<Col lg={6} md={8} className="col_register">
					<h3 className="h3">Login</h3>
					<hr className="line" />
					<Form className="AnonymousPro-font">
						<Form.Group>
							<Form.Label>Email</Form.Label>
							<EmailIcon className="icon" color="secondary" />
							<Form.Control type="email" required onChange={this.onEmailChange} />
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" required onChange={this.onPasswordChange} />
						</Form.Group>

						<Button className="btnSubmit"
							variant="primary" type="button"
							onClick={this.submitLogin}
							>
							Submit
  						</Button>
					</Form>
				</Col>
			</Container >

		);
	}
}

export default withRouter(connect(null, mapDispatchToProps)(Login));