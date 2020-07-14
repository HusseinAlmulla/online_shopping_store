import React, { Component } from 'react';
import { Container, Image, Col, Row, InputGroup, Nav, Tab, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/UserProfile.css'

const mapStateToProps = (state) => {
	return {
	  user: state.requestUserLoginReducer.user,
	}
  }

class UserProfile extends Component {

	constructor(props) {
		super(props);
		this.state = {
			country: '',
			userProfileInfo:[],
			errorMessage:''
		}
	}

	componentDidMount(){
		fetch(`http://localhost:3000/profile/:${this.props.user[0].id}`, {
		method: 'post',
		header: new Headers({
			'Content-Type': 'application/x-www-form-urlencoded',
   }),
	}).then(response => response.json())
		.then(data => {
			if (data[0].id) {
				this.setState({userProfileInfo: data[0]})
			}
			else if (data[0].error)
			this.setState({errorMessage: data[0].error});
		}).catch(err => err)
	}

	render() {
		const user = this.props.user[0];
		const userPrf = this.state.userProfileInfo;
		console.log(userPrf);
		return (
			<div style={{ margin: '20px' }}>
				<Tab.Container id="tab_informatoin" defaultActiveKey="login_information" >
					<Row>
						<Col className="col_user_profile_left" xs={3} md={3} lg={3} style={{ padding: '0px' }}>
							<Image className="profile_image" src="/Images/users/1.jpg" rounded />

							<hr className="draw_line" />

							<Nav variant="pills" className="flex-column">

								<Nav.Link eventKey="login_information">
									Personal Information
									</Nav.Link>
								<Nav.Link eventKey="address">
									Address
									</Nav.Link>

							</Nav>
						</Col>
						<Col className="col_user_profile_middle"
							xs={9} md={9} lg={6}
							style={{ padding: '5px' }}>

							<Tab.Content>
								<Tab.Pane eventKey="login_information">
									<Container >

										<h6 className="tab_title">
											Personal Information
										</h6>
										<hr className="draw_line"
											style={{ width: '50%' }} />

										<Form>
											<Form.Row>
												<Form.Group as={Col} controlId="formGridFirstName">
													<Form.Label>First name</Form.Label>
													<Form.Control type="text" placeholder="First name"  value={user.first_name} disabled />
												</Form.Group>

												<Form.Group as={Col} controlId="formGridLastName">
													<Form.Label>Last name</Form.Label>
													<Form.Control type="Last name" placeholder="Last name" value={user.last_name} disabled />
												</Form.Group>

											</Form.Row>
											<Form.Row>
												<Form.Group as={Col} controlId="formGridEmail">
													<Form.Label>Email</Form.Label>
													<Form.Control type="email" placeholder="Enter email" value={user.email} disabled />
												</Form.Group>
											</Form.Row>

											<Form.Group controlId="formGridUsername">
												<Form.Label>Username</Form.Label>
												<Form.Control placeholder="Enter username" value={user.username} disabled />
											</Form.Group>

											<Form.Row>
												<Form.Group>
													<Form.Label>Date of birth</Form.Label>
													<Form.Control type="text" value={user.date_birth}  disabled />
												</Form.Group>

												<Form.Group as={Col} controlId="formGridGender">
													<Form.Label>Gender</Form.Label>
													<Form.Control type="text" value={userPrf.user_gender} disabled />
												</Form.Group>
											</Form.Row>
										</Form>
									</Container>
								</Tab.Pane>

								<Tab.Pane eventKey="address">
									<Container>
										<h6 className="tab_title"> Address Information</h6>
										<hr className="draw_line" style={{ width: '50%' }} />

										<Form>
											<Form.Group controlId="formGridAddress1">
												<InputGroup.Prepend>
													<Form.Label>Address</Form.Label>
												</InputGroup.Prepend>
												<Form.Control disabled value={userPrf.street_addreess}/>
											</Form.Group>

											<Form.Group controlId="formGridAddress2">
												<Form.Label>Address 2</Form.Label>
												<Form.Control value="Apartment, Studio, or Floor" disabled />
											</Form.Group>

											<Form.Row>
												<Form.Group as={Col} controlId="formGridCity">
													<Form.Label>City</Form.Label>
													<Form.Control  value={userPrf.city}disabled />
												</Form.Group>

												<Form.Group as={Col} controlId="formGridState">
													<Form.Label>Country</Form.Label>
													<Form.Control value={userPrf.country} disabled />
												</Form.Group>

												<Form.Group as={Col} controlId="formGridZip">
													<Form.Label>Zip</Form.Label>
													<Form.Control value={userPrf.postal_code} disabled />
												</Form.Group>
											</Form.Row>
										</Form>
									</Container>
								</Tab.Pane>
							</Tab.Content>

							<Link type="button" className="btn btn-primary" style={{ margin: "0 auto", display: "block", width:"25%"}}
								to={{
									pathname: '/editprofile',
									state: {
									}
								}}>
								Edit
                			</Link>

						</Col>

					</Row>
				</Tab.Container>
			</div >
		);
	}
}

export default connect(mapStateToProps)(UserProfile);