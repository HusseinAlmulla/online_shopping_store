import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	logo: {
		flexGrow: 1,
		fontFamily: 'Norican',
		fontSize: '40px',
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="fixed">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.logo}>
						OZO

          </Typography>
					{/* These should be components. The logout should appear only when the user login */}
					<Button color="inherit">Login</Button>
					<Button color="inherit">Register</Button>
					<Button color="inherit">Logout</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
