import React, { Component } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import '../styles/CategoryMenu.css';
import { Link } from 'react-router-dom';
class CatagoryMenu extends Component {

	constructor(props) {
		super(props);
		this.state = {
			nav1: false,
			nav2: false,
			nav3: false,
			nav4: false,
			nav5: false,
			nav6: false,
			nav7: false,
		};
	}

	render() {
		return (
			<div>

				<Nav justify variant="tabs" defaultActiveKey="/home" as="ul" >

					<NavDropdown title="Clothing" id="nav-dropdown"
						show={this.state.nav1}
						onMouseEnter={() => this.setState({ nav1: true })}
						onMouseLeave={() => this.setState({ nav1: false })}
					>
						<NavDropdown.Item className="itemSize" eventKey="1.1">
							<Link to={{
								pathname: '/products',
								state: {
									main: 'Clothing',
									sub: 'Top'
								}
							}}> Top </Link>
						</NavDropdown.Item>
						<NavDropdown.Item eventKey="1.2">
							<Link to={{
								pathname: '/products',
								state: {
									main: 'Clothing',
									sub: 'Bottom'
								}
							}}>Bottom </Link>
						</NavDropdown.Item>
						<NavDropdown.Item eventKey="1.3">
							<Link to={{
								pathname: '/products',
								state: {
									main: 'Clothing',
									sub: 'Dress'
								}
							}}> Dress </Link>
						</NavDropdown.Item>
					</NavDropdown>

					<NavDropdown title="Bags" id="nav-dropdown"
						show={this.state.nav2}
						onMouseEnter={() => this.setState({ nav2: true })}
						onMouseLeave={() => this.setState({ nav2: false })}
					>
						<NavDropdown.Item className="itemSize" eventKey="2.1">
							<Link to={{
								pathname: '/products',
								state: {
									main: 'Bags',
									sub: 'Hand Bag'
								}
							}}> Hand Bag </Link>
						</NavDropdown.Item>
						<NavDropdown.Item eventKey="2.2">
							<Link to={{
								pathname: '/products',
								state: {
									main: 'Bags',
									sub: 'Shoulder Bag'
								}
							}}>Shoulder Bag </Link>
						</NavDropdown.Item>
						<NavDropdown.Item eventKey="2.3">
							<Link to={{
								pathname: '/products',
								state: {
									main: 'Bags',
									sub: 'Backpack'
								}
							}}> Backpack </Link>
						</NavDropdown.Item>
					</NavDropdown>

					<NavDropdown title="Accessories" id="nav-dropdown"
						show={this.state.nav3}
						onMouseEnter={() => this.setState({ nav3: true })}
						onMouseLeave={() => this.setState({ nav3: false })}
					>
						<NavDropdown.Item className="itemSize" eventKey="3.1">
							<Link to={{
								pathname: '/products',
								state: {
									main: 'Accessories',
									sub: 'Belts'
								}
							}}> Belts </Link>
						</NavDropdown.Item>
						<NavDropdown.Item eventKey="3.2">
							<Link to={{
								pathname: '/products',
								state: {
									main: 'Accessories',
									sub: 'Glasses'
								}
							}}>Glasses </Link>
						</NavDropdown.Item>
						<NavDropdown.Item eventKey="3.3">
							<Link to={{
								pathname: '/products',
								state: {
									main: 'Accessories',
									sub: 'Neckles'
								}
							}}> Neckles </Link>
						</NavDropdown.Item>
					</NavDropdown>

				</Nav >
			</div>
		);
	}
}

export default CatagoryMenu;