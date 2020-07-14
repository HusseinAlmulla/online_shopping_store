import React, { Component } from 'react';
import { Container, Image, Col, Row, InputGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/UserProfile.css'

class EditUserProfile extends Component {

	constructor() {
		super();
		this.state = {
			country: ["Iraq", "Oman"]
		}
	}

	onSubmitForm = (event) => {
		if (this.isFormValidate()) {
			event.preventDefault();
			
			fetch('http://localhost:3000/profile/:userid' + event.target.value, {
				method: 'get',
				headers: { 'Content-Type': 'application/json' },
			}).then(response => response.json())
				.then(res => {
					if (res.id) {
						this.props.setUser(res);
					}
					else if (res.error) {
						this.setState({
							errorMessage: res.error
						})
					}
				})
		}
	}

	render() {
		return (
			<div style={{ margin: '20px' }}>

				<Row>
					<Col className="col_user_profile_left" xs={3} md={3} lg={3} style={{ padding: '0px' }}>
						<Image className="profile_image" src="/Images/users/1.jpg" rounded />

						<hr className="draw_line" />

					</Col
					>
					<Col className="col_user_profile_middle"
						xs={9} md={9} lg={6}
						style={{ padding: '5px' }}>
						<Container>
							<h6 className="tab_title" >
								Personal Information
							</h6>

							<Form>
								<Form.Row>
									<Form.Group as={Col} controlId="formGridFirstName">
										<Form.Label>First name</Form.Label>
										<Form.Control type="text" placeholder="First name" />
									</Form.Group>

									<Form.Group as={Col} controlId="formGridLastName">
										<Form.Label>Last name</Form.Label>
										<Form.Control type="Last name" placeholder="Last name" />
									</Form.Group>

								</Form.Row>
								<Form.Row>
									<Form.Group as={Col} controlId="formGridEmail">
										<Form.Label>Email</Form.Label>
										<Form.Control type="email" placeholder="Enter email" />
									</Form.Group>
								</Form.Row>

								<Form.Group controlId="formGridUsername">
									<Form.Label>Username</Form.Label>
									<Form.Control placeholder="Enter username" />
								</Form.Group>
								<Form.Row>
									<Form.Group>
										<Form.Label>Date of birth</Form.Label>
										<Form.Control type="date" required />
									</Form.Group>

									<Form.Group as={Col} controlId="formGridGender">
										<Form.Label>Gender</Form.Label>
										<Form.Control as="select" value="Choose...">
											<option>Choose...</option>
											<option>Male</option>
											<option>female</option>
											<option>Other</option>
										</Form.Control>
									</Form.Group>
								</Form.Row>

							</Form>
						</Container>

						<hr className="draw_line" style={{ width: '50%' }} />

						<Container>
							<h6 className="tab_title"> Address Information</h6>

							<Form>
								<Form.Group controlId="formGridAddress1">
									<InputGroup.Prepend>
										<Form.Label>Address</Form.Label>
									</InputGroup.Prepend>
									<Form.Control placeholder="1234 Main St" />
								</Form.Group>

								<Form.Group controlId="formGridAddress2">
									<Form.Label>Address 2</Form.Label>
									<Form.Control placeholder="Apartment, studio, or floor" />
								</Form.Group>

								<Form.Row>
									<Form.Group as={Col} controlId="formGridCity">
										<Form.Label>City</Form.Label>
										<Form.Control />
									</Form.Group>

									<Form.Group as={Col} controlId="formGridState">
										<Form.Label>Country</Form.Label>
										<Form.Control as="select" value="Choose..." >
											<option>Choose...</option>
											{
												this.state.country.map(item => (<option> {item} </option>))
											}
										</Form.Control>
									</Form.Group>

									<Form.Group as={Col} controlId="formGridZip">
										<Form.Label>Zip</Form.Label>
										<Form.Control />
									</Form.Group>
								</Form.Row>
							</Form>

						</Container>
						{/* <Button className="float-right" variant="primary" type="submit">
									Save
 						</Button> */}
						<Link type="button" className="btn btn-primary" style={{ margin: "0 auto", display: "block", width: "25%" }}
							to={{
								pathname: '/profile',
								state: {
								}
							}}>
							Save
                			</Link>
					</Col>

				</Row>
			</div >
		);
	}
}

export default EditUserProfile;