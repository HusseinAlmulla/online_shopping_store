import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../styles/ProductCard.css'

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		'&:hover': {
			WebkitBoxShadow: 'rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px',
			boxShadow: 'rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px',
			MozBoxShadow: 'rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px',
		}
	}
});

export default function ImgMediaCard({ item }) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt="Contemplative Reptile"
					height="300"
					image={item.image}
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{item.name}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{item.desc}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Learn More
        		</Button>
				<label className="priceLabel" style={{ marginLeft: 'auto' }}>
					${item.price}
				</label>
			</CardActions>
		</Card>

	);
}
