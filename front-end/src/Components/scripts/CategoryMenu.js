import React, { Component } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { requestCategoryItemsAction } from '../Actions.js';
import '../styles/CategoryMenu.css';

const mapDispatchToProps = (dispatch) => {
	return {
		onRequestCategory: (main, sub) => dispatch(requestCategoryItemsAction(main, sub))
	}
}

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

	getItems = (main, sub) => {
		this.props.onRequestCategory(main, sub);
		this.props.history.push("/products/");
	}

	render() {
		return (
			<div>

				<Nav justify variant="tabs" defaultActiveKey="/home" as="ul" >

					{this.createCategoryMenuTab(this.state.nav1, "nav1", "Clothing", ["Top", "Bottom", "Dress"])}

					{this.createCategoryMenuTab(this.state.nav2, "nav2", "Bags", ["Hand Bag", "Shoulder Bag", "Backpack"])}

					{this.createCategoryMenuTab(this.state.nav3, "nav3", "Accessories", ["Glasses", "Neckles", "Belts"])}

				</Nav >
			</div >
		);
	}

	createCategoryMenuTab(navState, navNum, main, sub = []) {
		return <NavDropdown title={main}
			id="nav-dropdown"
			show={navState}
			onMouseEnter={() => this.setState({ [navNum]: true })}
			onMouseLeave={() => this.setState({ [navNum]: false })}>
			{
				sub.map(subC =>
					<NavDropdown.Item
						className="itemSize"
						eventKey={subC}
						onClick={() => this.getItems(main, subC)}>
						{subC}
					</NavDropdown.Item>
				)
			}
		</NavDropdown>;
	}
}

export default withRouter(connect(null, mapDispatchToProps)(CatagoryMenu));