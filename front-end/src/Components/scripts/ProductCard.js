import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import '../styles/ProductCard.css'

class ProductCard extends React.Component {
	classes = makeStyles({
		root: {
			maxWidth: 345,
			'&:hover': {
				WebkitBoxShadow: 'rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px',
				boxShadow: 'rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px',
				MozBoxShadow: 'rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px',
			}
		}
	});

	render() {
		const item = this.props.item;
		return (
			<Card className={this.classes.root} >
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="300"
						image={item.image_url}
						title="Contemplative Reptile"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							<Link to={`/products/${item.id}`}>
								{item.short_title}
							</Link>
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{item.long_title}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Link to="" className="footerLabel" color="primary">
						reviews
        		</Link>
					<label className="footerLabel" style={{ marginLeft: 'auto' }}>
						${item.price}
					</label>
				</CardActions>
			</Card>
		);
	}
}

export default ProductCard;
