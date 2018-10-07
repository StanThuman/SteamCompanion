import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import  { CHANGE_PAGEROUTE, changePageRoute } from '../redux/actions';
import { pageRoutes } from '../redux/reducers';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import NavBar from '../components/NavBar';
import { withRouter } from 'react-router-dom';
export const styles = theme => ({

  root: {
    width: '100%'
  //  flexGrow: 1
  }
  ,
  appBar: {

  }
  ,
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    marginRight: 24,

    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  root: {
    fontFamily: 'bold'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade( theme.palette.common.white, 0.15 ),
    '&:hover': {
      backgroundColor: fade( theme.palette.common.white, 0.25 )
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  label: {
    fontWeight: 'bold',
    textDecoration: 'none'
  },

  flexContainer: {
    flexGrow: 3
  },
  rightSide: {
    flexGrow: 2
  },
  labelWrapped: {
      flexDirection: 'row',

  }

});

const navigationLinks = [
  {
    id: 0,
    label: 'Home',
    href: '/'
  },
  {
    id: 1,
    label: 'Compare',
    href: '/compare'
  },
  {
    id: 2,
    label: 'Achievements',
    href: '/achievements'
  },
  {
    id: 3,
    label: 'About',
    href: '/about'
  },
  {
    id: 4,
    label: 'Steam',
    href: '/nowhere'
  }
]


const mapStateToProps = state => {
  console.log("mapStateToprops");
  console.log(state);
  return {
    title: 'Steam Companion',
    routeNumber: state.routeNumber,
    navigationLinks

  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleClick: (event, value) => {
      //console.log(`value = ${value}`);
      dispatch(changePageRoute(value))
    }
  }
}

const NavBarWithRoutes = withRouter(NavBar);
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NavBarWithRoutes));//
