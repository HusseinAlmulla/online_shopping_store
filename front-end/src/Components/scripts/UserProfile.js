import React, { Component } from 'react';
import { Container, Image, Col, Row, InputGroup, FormControl, Nav, Tab } from 'react-bootstrap';
import '../styles/UserProfile.css'

class UserProfile extends Component {

	render() {
		return (
			<div style={{ margin: '50px' }}>
				<Tab.Container id="tab_informatoin" defaultActiveKey="login_information" >
					<Row>
						<Col className="col_user_profile_left" xs={3} md={3} lg={3} style={{ padding: '5px' }}>
							<Image className="profile_image" src="/Images/users/1.jpg" rounded />

							<hr className="draw_line" />

							<Nav variant="pills" className="flex-column">
								<Nav.Item>
									<Nav.Link eventKey="login_information">
										Login Information
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="address">
										Address
									</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
						<Col className="col_user_profile_middle" xs={9} md={9} lg={9} style={{ padding: '5px' }}>
							<Tab.Content>
								<Tab.Pane eventKey="login_information">
									<Container >
										<h4 className="tab_title">
											Login Information
										</h4>
										<hr className="draw_line" style={{ width: '50%' }} />
										<InputGroup className="mb-3">
											<InputGroup.Prepend>
												<InputGroup.Text id="basic-addon1">
													First name
												</InputGroup.Text>
											</InputGroup.Prepend>
											<FormControl placeholder="..." aria-label="FirstName" aria-describedby="basic-addon1" />
										</InputGroup>

										<InputGroup className="mb-3">
											<InputGroup.Prepend>
												<InputGroup.Text id="basic-addon1">
													Last name
												</InputGroup.Text>
											</InputGroup.Prepend>
											<FormControl placeholder="..." aria-label="LastName" aria-describedby="basic-addon1" />
										</InputGroup>

										<InputGroup className="mb-3">
											<InputGroup.Prepend>
												<InputGroup.Text id="basic-addon1">
													Username
												</InputGroup.Text>
											</InputGroup.Prepend>
											<FormControl placeholder="..." aria-label="Username" aria-describedby="basic-addon1" />
										</InputGroup>
										<InputGroup className="mb-3">
											<InputGroup.Prepend>
												<InputGroup.Text id="basic-addon1">
													Email
												</InputGroup.Text>
											</InputGroup.Prepend>
											<FormControl placeholder="..." aria-label="Email" aria-describedby="basic-addon1" />
										</InputGroup>


									</Container>
								</Tab.Pane>
								<Tab.Pane eventKey="address">
									<Container>
										<h4 className="tab_title"> Address Information</h4>
										<hr className="draw_line" style={{ width: '50%' }} />
										This is for address
									</Container>
								</Tab.Pane>
							</Tab.Content>
						</Col>

					</Row>
				</Tab.Container>
			</div >
		);
	}
}

export default UserProfile;