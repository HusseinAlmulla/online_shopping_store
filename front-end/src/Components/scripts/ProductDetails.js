import React, { Component } from 'react';
import data from '../../data.json';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import '../styles/ProductDetails.css';

class ProductDetails extends Component {

	constructor(props) {
		super(props);
		this.state = {
			item: '',
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

	render() {
		const item = this.state.item;
		return (
			<Container className="justify-content-md-center">
				<Row >
					<h2>{item.name}</h2>
				</Row>
				<Row >
					<Col  xs={6} md={4} lg={6}>
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100" src={item.image}
									alt="First slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={item.image}
									alt="second slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={item.image}
									alt="Third slide" />
							</Carousel.Item>
						</Carousel>
					</Col>
					<Col xs={6} md={4} >
						<Row >
							<p >Sizes </p>
						</Row>
						<Row >
							<ul>
								<li style={{fontSize: 24}}>Price</li>
								<li style={{fontSize: 26, color: 'blue'}}>${item.price}</li>
								<li style={{fontSize: 14, color: 'red'}}>Original $ {item.price+10}</li>
							</ul>
						</Row>
						<Row>
							<Button variant="success">Add to Cart</Button>
						</Row>
					</Col>
				</Row>
				<Row >
					<p>{item.desc}</p>
				</Row>
			</Container>
		)
	}
}

export default ProductDetails;