import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Menu from './components/Navigation/Menu';
import HeaderBar from './components/Navigation/HeaderBar';
import Feed from './components/Feed/Feed';
import MyMentors from './components/MyMentors/MyMentors'
import Messages from './components/Messages/Messages'
import News from './components/News/News'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css'
import Community from './components/Community/Community';

export default function App(props) {
  const { container } = props;

  const classes = makeStyles(theme => ({
    root: {
        display: 'flex',
        fontFamily: 'Nunito Sans',
    },
    content: {
      flexGrow:1,
      padding: theme.spacing(3),
      fontFamily: 'Nunito Sans',
    },
    toolbar: theme.mixins.toolbar
    }));

  const theme = createMuiTheme({
    palette: {
      primary: {
        main:'#6E5AA2',

      },
      secondary: {
        main: '#2b2d42',
      },
      background:{
        default: '#EDEBF2',
        paper: '#F9F7FF'
      },
      divider: '#E3E8EA'

    },
    typography:{
      fontFamily: 'Nunito Sans',
    }
  });

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const drawerWidth = 240;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes().root}>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <HeaderBar handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth}/>
          <Menu theme={theme} container={container} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth}/>
          <Switch>
            <Route path="/community">
              <Community classes={classes}/>
            </Route>
            <Route path="/news">
              <News classes={classes}/>
            </Route>
            <Route path="/messages">
              <Messages classes={classes}/>
            </Route>
            <Route path="/mentors">
              
              <MyMentors classes={classes}/>
            </Route>
            <Route exact path="/">
              <Feed classes={classes}/>
            </Route>
          </Switch>        
        </Router>
      </ThemeProvider>
    </div>
  );
}


