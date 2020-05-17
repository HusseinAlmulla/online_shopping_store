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
		this.updateState();
	}

	componentDidUpdate() {
		this.updateState();
	}

	updateState() {
		if (this.state.sub !== this.props.location.state.sub) {
			this.setState({
				main: this.props.location.state.main,
				sub: this.props.location.state.sub,
			})
			this.getItems(this.props.location.state.main, this.props.location.state.sub)
		}
	}

	getItems(main, sub) {
		fetch('http://localhost:3000/products/category', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				main: main,
				sub: sub,
			})
		}).then(response => response.json())
			.then(it => {
				if (it[0].id) {
					this.setState({ items: it, error: '', })
				}
				else if (it[0].error) {
					this.setState({ error: it[0].error, items:[] })
					
				}
			})
	}

	render() {
		return (
			<div className="container-grid" style={{ marginTop: '70px' }} >
				{			
					this.state.items[0] !== undefined
						? this.state.items.map(item => (
							<ProductCard key={item.id} item={item} />))
						:  <Error msg={'No item found'}/>
				}
			</div >
		)
	}
}

export default CardsList;