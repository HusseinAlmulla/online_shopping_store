import React from 'react';
import ProductCard from './ProductCard.js';
import './ProductCard.css'

class CardsList extends React.Component {
	render() {
		return (
			<div className="container-grid zone">
				{
					this.props.data.map(item => (
						<ProductCard item={item}/>))
				}

			</div>
		)
	}
}






export default CardsList;