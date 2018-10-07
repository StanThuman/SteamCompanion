import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Route, Switch, NavLink } from 'react-router-dom';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import NavigationBar from './containers/NavigationBar';
import Home from './containers/home-layout';
import About from './containers/about-layout';
import Grid from '@material-ui/core/Grid';

//root layout
//class App extends Component {
const styles = themes => ({
  main: {


  },
  container: {
    flexGrow: 1,

    marginTop: 50,
    margin: 'auto',


  },
  leftMargin: {
    flexGrow: 2
  },
  rightMargin: {
    flexGrow: 2
  },
  page:{
    ...themes.mixins.gutters(),
    backgroundColor: 'white',
    flexGrow: 8
  }
})

const App = ({ store, classes }) => (
    <div>
      <div>
        <NavigationBar />
      </div>

      <div className={ classes.container }>

            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/about" component={ About } />
            </Switch>


        </div>
    </div>
)



//}
// const mapDispatchToProps = ( dispatch, ownProps ) => ({
//   onClick: () => dispatch()
// })

export default withStyles(styles)(App);
