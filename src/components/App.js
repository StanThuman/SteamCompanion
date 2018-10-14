import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Route, Switch, NavLink } from 'react-router-dom';
import { createStore } from 'redux';
import { connect } from 'react-redux';


import Paper from '@material-ui/core/Paper';
import NavigationBar from '../containers/NavigationBar';
import HomeLayout from './home-layout';
import CompareLayout from './compare-layout';
import AboutLayout from './about-layout';
import Grid from '@material-ui/core/Grid';

//root layout
//class App extends Component {
const styles = themes => ({
  container: {
    flexGrow: 1,
    marginTop: 50,
    
  },
});

const App = ({ store, classes }) => (
  <div>
    <React.Fragment>
      <NavigationBar />
    </React.Fragment>
    <div className={ classes.container }>
      <Switch>
        <Route exact path="/" component={ HomeLayout } />
        <Route exact path="/compare" component={ CompareLayout } />
        <Route exact path="/about" component={ AboutLayout } />
      </Switch>
    </div>
  </div>
)

export default withStyles(styles)(App);
