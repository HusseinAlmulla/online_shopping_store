import React, { Component } from 'react'
import ProductCard from './ProductCard.js';
import Error from './Error.js';

import { setSearchFieldAction, requestSearchItemsAction } from '../Actions.js';
import { connect } from 'react-redux';




const mapStateToProps = (state) => {
	return {
		searchField: state.searchItemsReducer.searchField,
		items: state.requestSearchItemsReducer.items,
		error: state.requestSearchItemsReducer.error,
		isPending: state.requestSearchItemsReducer.isPending
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onRequestSearch: (keyword) => dispatch(requestSearchItemsAction(keyword))
	}
}

class Search extends Component {
	constructor() {
		super();
		this.state = {
			keyword: ''
		}
	}

	componentDidMount() {
		// this.props.onRequestSearch(this.props.searchField)
		// console.log(this.props.items)
		// this.setState({ keyword: this.props.searchField })
		console.log(this.props.searchField)
		console.log(this.props.isPending)
	}

	componentDidUpdate() {
		// if (this.state.keyword !== this.props.searchField)
			// this.props.onRequestSearch(this.props.searchField)
	}


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


export default connect(mapStateToProps, mapDispatchToProps)(Search);