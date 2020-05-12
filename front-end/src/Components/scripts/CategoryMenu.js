import React, { Component } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import '../styles/CategoryMenu.css';

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
			<Nav justify variant="tabs" defaultActiveKey="/home" as="ul" >

				<NavDropdown title="Clothing" id="nav-dropdown" show={this.state.nav1} 
				onMouseEnter={()=>this.setState({nav1:true})} 
				onMouseLeave={()=>this.setState({nav1:false})} 
				>
					<NavDropdown.Item className="itemSize" eventKey="1.1">Tops</NavDropdown.Item>
					<NavDropdown.Item eventKey="1.2">Bottoms</NavDropdown.Item>
					<NavDropdown.Item eventKey="1.3">Dress</NavDropdown.Item>
				</NavDropdown>

				<NavDropdown title="SportWear" id="nav-dropdown" show={this.state.nav2} 
				onMouseEnter={()=>this.setState({nav2:true})} 
				onMouseLeave={()=>this.setState({nav2:false})} >
					<NavDropdown.Item className="itemSize" eventKey="2.1">Excercis</NavDropdown.Item>
					<NavDropdown.Item eventKey="2.2">Shoes</NavDropdown.Item>
					<NavDropdown.Item eventKey="3.3">Flixable</NavDropdown.Item>
				</NavDropdown>

				<NavDropdown title="Outerwear" id="nav-dropdown" show={this.state.nav3} 
				onMouseEnter={()=>this.setState({nav3:true})} 
				onMouseLeave={()=>this.setState({nav3:false})} >
					<NavDropdown.Item className="itemSize" eventKey="3.1">Jacket</NavDropdown.Item>
					<NavDropdown.Item eventKey="3.2">Sweater</NavDropdown.Item>
					<NavDropdown.Item eventKey="3.3">Coat</NavDropdown.Item>
				</NavDropdown>

				<NavDropdown title="Bags" id="nav-dropdown" show={this.state.nav4} 
				onMouseEnter={()=>this.setState({nav4:true})} 
				onMouseLeave={()=>this.setState({nav4:false})} >
					<NavDropdown.Item className="itemSize" eventKey="4.1">Hand Bag</NavDropdown.Item>
					<NavDropdown.Item eventKey="4.2">Shoulder Bag</NavDropdown.Item>
					<NavDropdown.Item eventKey="4.3">Backpack</NavDropdown.Item>
				</NavDropdown>

				<NavDropdown title="Shoses" id="nav-dropdown" show={this.state.nav5} 
				onMouseEnter={()=>this.setState({nav5:true})} 
				onMouseLeave={()=>this.setState({nav5:false})} >
					<NavDropdown.Item className="itemSize" eventKey="5.1">Sport Shose</NavDropdown.Item>
					<NavDropdown.Item eventKey="5.2">Boots</NavDropdown.Item>
					<NavDropdown.Item eventKey="5.3">Casual Shoes</NavDropdown.Item>
				</NavDropdown>

				<NavDropdown title="Beauty" id="nav-dropdown" show={this.state.nav6} 
				onMouseEnter={()=>this.setState({nav6:true})} 
				onMouseLeave={()=>this.setState({nav6:false})} >
					<NavDropdown.Item className="itemSize" eventKey="6.1">Makeup</NavDropdown.Item>
					<NavDropdown.Item eventKey="6.2">Hair Car</NavDropdown.Item>
					<NavDropdown.Item eventKey="6.3">Skin Car</NavDropdown.Item>
				</NavDropdown>

				<NavDropdown title="Accessories" id="nav-dropdown" show={this.state.nav7} 
				onMouseEnter={()=>this.setState({nav7:true})} 
				onMouseLeave={()=>this.setState({nav7:false})} >
					<NavDropdown.Item className="itemSize" eventKey="7.1">Belts</NavDropdown.Item>
					<NavDropdown.Item eventKey="7.2">Glasses</NavDropdown.Item>
					<NavDropdown.Item eventKey="7.3">Neckles</NavDropdown.Item>
				</NavDropdown>
			</Nav >
		);
	}
}

export default CatagoryMenu;