import React, { Component } from 'react'
import { connect } from 'react-redux';
import ProductCard from './ProductCard.js';
import Error from './Error.js';

const mapStateToProps = (state) => {
	return {
		items: state.requestSearchItemsReducer.items,
		error: state.requestSearchItemsReducer.error,
		isPending: state.requestSearchItemsReducer.isPending
	}
}


class CardsList extends Component {

	render() {
		return (
			<div className="container-grid" style={{ marginTop: '70px' }} >
				{
					this.props.isPending === false ?
						this.props.items !== undefined || this.props.items !== []
							? this.props.items.map(item => (
								<ProductCard key={item.id} item={item} />))
							: <Error msg={'No item found'} />
						:
						<h3>Loading</h3>
				}
			</div >
		);
	}
}

export default connect(mapStateToProps)(CardsList);