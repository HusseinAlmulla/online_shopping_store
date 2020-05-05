import React from 'react';
import ProductCard from './ProductCard.js';
import '../styles/ProductCard.css'

class CardsList extends React.Component {
	render() {
		return (
			<div className="container-grid" style={{marginTop: '70px'}}>
				{
					this.props.data.map(item => (
						<ProductCard item={item}/>))
				}
			</div>
		)
	}
}


export default CardsList;