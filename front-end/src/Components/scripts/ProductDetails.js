import React, { Component } from 'react';
import data from '../../data.json';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import '../styles/ProductDetails.css';

class ProductDetails extends Component {

	constructor(props) {
		super(props);
		this.state = {
			item: '',
			selected_sized: '',
		};
	}
	//TODO: replcase this with one that search the database
	componentDidMount() {
		data.forEach(element => {
			var currentId = element.id.toString();
			if (currentId === this.props.match.params.id) {
				this.setState({ item: element })
			}
		});
	}

	setSize=(size)=>{
		this.setState({
			selected_sized: document.getElementById(size).textContent
		});

		document.getElementById("s").style.backgroundColor = "white";
		document.getElementById("s").style.color = "#b8adad";

		document.getElementById("m").style.backgroundColor = "white";
		document.getElementById("m").style.color = "#b8adad";
		
		document.getElementById("l").style.backgroundColor = "white";
		document.getElementById("l").style.color = "#b8adad";
		
		document.getElementById("xl").style.backgroundColor = "white";
		document.getElementById("xl").style.color = "#b8adad";

		document.getElementById(size).style.backgroundColor = "#b8adad";
		document.getElementById(size).style.color = "white";

		
	}
	
	render() {
		const item = this.state.item;
		return (
			
			<Container className="justify-content-md-center">
				<Row >
					<h2>{item.name}</h2>
				</Row>
				<Row >
					<Col xs={6} md={4} lg={6}>
						<Carousel className="carousel slide">
							<Carousel.Item>
								<img className="d-block w-75" src={item.image}
									alt="First slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-75" src={item.image}
									alt="second slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-75" src={item.image}
									alt="Third slide" />
							</Carousel.Item>
						</Carousel>
					</Col>
					<Col xs={6} md={4} >
						<Row >
							<ul>
								<li style={{ fontSize: 20 }}>Price</li>
								<li style={{ fontSize: 26, color: 'blue' }}>${item.price}</li>
								<li style={{ fontSize: 14, color: 'red' }}>Original $ {item.price + 10}</li>
							</ul>
						</Row>
						<Row >
							<div className="sizeSection">
							<div >Sizes</div>
								<label id="s" className="btn btn-outline-info sizeBtn" title="Small" onClick={() =>this.setSize('s')} >SMALL</label>
								<label id="m" className="btn btn-outline-info sizeBtn" title="MEDIUM" onClick={() =>this.setSize('m')}>MEDIUM</label>
								<label id="l" className="btn btn-outline-info sizeBtn" title="LARGE" onClick={() =>this.setSize('l')}>LARGE</label>
								<label id="xl" className="btn btn-outline-info sizeBtn" title="X-LARGE" onClick={() =>this.setSize('xl')}>X-LARGE</label>
								
							</div>
						</Row>
						<Row>
							<Button className="addToCart" variant="success">Add to Cart</Button>
						</Row>
					</Col>
				</Row>
				<Row className="desc">
					<div style={{ fontSize: '1.2em', fontWeight: 'bold' }}>{item.longTitle}</div>
					{item.desc}
				</Row>
			</Container>
		)
	}
}

export default ProductDetails;