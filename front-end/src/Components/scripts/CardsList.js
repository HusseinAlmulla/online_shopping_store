import React from 'react';
import ProductCard from './ProductCard.js';
import '../styles/ProductCard.css';
import Error from './Error.js'


class CardsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			main: '',
			sub: '',
			items: [],
			error: '',
		}
	}


	componentDidMount() {
		console.log(this.props.location);
		this.setState({ items: this.props.location.state.items });
	}

	componentDidUpdate() {
		// this.updateState();
	}

	updateState() {
		console.log(this.props.location);
		if (this.state.items !== this.props.location.state.items) {
			this.setState({ items: this.props.location.state.items });
		}
	}

	// getItems(main, sub) {
	// 	fetch('http://localhost:3000/products/category', {
	// 		method: 'post',
	// 		headers: { 'Content-Type': 'application/json' },
	// 		body: JSON.stringify({
	// 			main: main,
	// 			sub: sub,
	// 		})
	// 	}).then(response => response.json())
	// 		.then(it => {
	// 			if (it[0].id) {
	// 				this.setState({ items: it, error: '', })
	// 			}
	// 			else if (it[0].error) {
	// 				this.setState({ error: it[0].error, items:[] })

	// 			}
	// 		})
	// }

	render() {
		// console.log(this.props.location.state.items);
		// this.setState({ items: this.props.location.state.items });
		return (
			<div className="container-grid" style={{ marginTop: '70px' }} >
				{
					this.props.location.state.items[0] !== undefined
						? this.state.items.map(item => (
							<ProductCard key={item.id} item={item} />))
						: <Error msg={'No item found'} />
				}
			</div >
		)
	}
}

export default CardsList;