import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Input from '@material-ui/core/Input';

import FaceIcon from '@material-ui/icons/Face';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
// import MenuIcon from '@material-ui/icons/Menu';
// import SvgIcon from '@material-ui/core/SvgIcon';
// import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
// import TimeLineIcon from '@material-ui/icons/TimeLine';
// import BuildIcon from '@material-ui/icons/Build';
// import GradeIcon from '@material-ui/icons/Grade';
// import AssignmentIcon from '@material-ui/icons/Assignment';

//import { styles } from '../styles/Styles';
import  { CHANGE_PAGEROUTE, changePageRoute } from '../redux/actions';


const ExternalLink = props => <a {...props} />

//const NavBar = ({ routeNumber, handleClick, classes }) => {
// class NavBar extends Component {
//
//   constructor(props){
//     super(props);
//   }
  //TODO: GET initial state for highlight on navbar

  const NavBar = ({title, classes, handleClick, routeNumber, navigationLinks }) => (
      <Paper className={classes.root}>
        <AppBar
          color='primary'
          position='static' >

          <Toolbar variant='dense'>
            <FaceIcon className={ classes.menuButton }/>
            <Typography className={ classes.title }
              variant='title'
              color='inherit'
              noWrap>
               { title }
            </Typography>

            <div className={ classes.grow } />

            <Tabs className={ classes.root }
              onChange={ handleClick }
              color='secondary'
              indicatorColor='secondary'
              value={ routeNumber }>

              { navigationLinks.map( link =>
                <Tab key={ link.id } className={ classes.label }
                  label={ link.label }
                  component={ Link }
                  to={ link.href } />
              )}

            </Tabs>

            <div className={ classes.rightSide } />
          </Toolbar>

        </AppBar>
      </Paper>
    )



export default NavBar;
