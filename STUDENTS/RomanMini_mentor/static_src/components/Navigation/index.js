import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { fade, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import './style.css'

const useStyles = theme => ({
		grow: {
				flexGrow: 1,
		},
		menuButton: {
				marginRight: theme.spacing(2),
		},
		title: {
				display: 'none',
				[theme.breakpoints.up('sm')]: {
						display: 'block',
				},
		},
		search: {
				position: 'relative',
				borderRadius: theme.shape.borderRadius,
				backgroundColor: fade(theme.palette.common.white, 0.15),
				'&:hover': {
						backgroundColor: fade(theme.palette.common.white, 0.25),
				},
				marginRight: theme.spacing(2),
				marginLeft: 0,
				width: '100%',
				[theme.breakpoints.up('sm')]: {
						marginLeft: theme.spacing(3),
						width: 'auto',
				},
		},
		searchIcon: {
				width: theme.spacing(7),
				height: '100%',
				position: 'absolute',
				pointerEvents: 'none',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
		},
		inputRoot: {
				color: 'inherit',
		},
		inputInput: {
				padding: theme.spacing(1, 1, 1, 7),
				transition: theme.transitions.create('width'),
				width: '100%',
				[theme.breakpoints.up('md')]: {
						width: 200,
				},
		},
		sectionDesktop: {
				display: 'none',
				[theme.breakpoints.up('md')]: {
						display: 'flex',
				},
		},
		sectionMobile: {
				display: 'flex',
				[theme.breakpoints.up('md')]: {
						display: 'none',
				},
		},
});

class Navigation extends Component {
		static propTypes = {
				// isMenuOpen:         PropTypes.bool.isRequired,
				// isMobileMenuOpen:   PropTypes.bool.isRequired,
		};

		handleProfileMenuOpen = event => {
				setAnchorEl(event.currentTarget);
		};

		handleMobileMenuClose = () => {
				setMobileMoreAnchorEl(null);
		};

		handleMenuClose = () => {
				setAnchorEl(null);
				handleMobileMenuClose();
		};

		handleMobileMenuOpen = event => {
				setMobileMoreAnchorEl(event.currentTarget);
		};

		render () {
				const classes = this.props;

				return(
						<AppBar position="static">
								<Toolbar>
										<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
												<MenuIcon />
										</IconButton>
										<Typography variant="h6" className={classes.title}>
												News
										</Typography>
										<Button color="inherit">Login</Button>
								</Toolbar>
						</AppBar>
				)
		}
}

export default withStyles(useStyles)(Navigation);