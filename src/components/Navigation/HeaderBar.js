import React from 'react'

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../img/womentor-logo-white.png'

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

export default function HeaderBar({drawerWidth, handleDrawerToggle}){

    const classes = makeStyles( theme => ({
        appBar: {
            [theme.breakpoints.up('sm')]: {
            // width: `calc(100% - ${drawerWidth}px)`,
            width: `100%`
            // marginLeft: drawerWidth,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        }
    }))

    return (
        <AppBar position="fixed" className={classes().appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes().menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Link to="/">
                    <img src={logo} alt="Womentor logo" style={{height:'40px', paddingTop:"10px"}}/>
                </Link>
            
            </Toolbar>
        </AppBar>
    )
}