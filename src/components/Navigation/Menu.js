import React from 'react';
import {Link} from 'react-router-dom'

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';

import List from '@material-ui/core/List';
import ListItemLink from './ListItemLink'


import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import CommunityIcon from '../Icons/CommunityIcon';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { makeStyles, useTheme} from '@material-ui/core/styles';

import MailIcon from '@material-ui/icons/Mail';

export default function Menu({container, mobileOpen, handleDrawerToggle, drawerWidth}){

    const theme = useTheme()
    
    const classes = makeStyles(theme => ({
    root: {
        display: 'flex',
        fontFamily: 'Nunito Sans',
    },
    drawer: {
        zIndex:1,
        [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },

    menuOptions:{
        flexDirection: 'column'
    },

    menuIcons:{
        display: 'block',
        textAlign: 'center',
        color: theme.palette.secondary.light,
    }
    }));


    const iconSize = { 'fontSize': 40}

    const menuOptions = [
        {
          "title":"Mentor Feed",
          "icon": (<DynamicFeedIcon style={iconSize}/>),
          "link":"/"
        },
        {
          "title":"My Mentors",
          "icon":(<SupervisorAccountIcon style={iconSize}/>),
          "link":"/mentors"
        },
        {
          "title":"Messages",
          "icon":(<MailIcon style={iconSize}/>),
          "link":"/messages"
        },
        {
          "title":"Community",
          "icon":(<CommunityIcon style={iconSize}/>),
          "link":"/community",
    
        },
        {
          "title":"News",
          "icon":(<LibraryBooksIcon style={iconSize}/>),
          "link":"/news"
        }
      ]
    
      const drawer = (
        <div>
            
          <div className={classes().toolbar} />
          <Divider />
            <List>
      <ListItemLink button key="Account" className={classes().menuOptions} as={Link} to="/" icon={<AccountCircleIcon style={iconSize}/>} primary="Account"/>
            </List>
          <Divider />
          <List>
            {menuOptions.map((option) => (
                <ListItemLink button key={option.title} className={classes().menuOptions} as={Link} to={option.link} icon={option.icon} primary={option.title}/>
            ))}
          </List>
          <Divider />
          
        </div>
      );

    return(
        <nav className={classes().drawer} aria-label="navigation">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                    paper: classes().drawerPaper,
                    }}
                    ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                    paper: classes().drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    );
}