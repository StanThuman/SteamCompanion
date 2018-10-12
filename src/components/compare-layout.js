import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import join from 'lodash/join';
import Fade from '@material-ui/core/Fade';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import SteamUserSearch from '../containers/SteamUserSearch';
//import FriendList from './FriendList';
const styles = themes => ({
  root: {
    ...themes.mixins.gutters(),
    paddingTop: themes.spacing.unit * 2,
    paddingBottom: themes.spacing.unit * 2
  },

})

// class CompareLayout extends Component {
//   constructor(props){
//     super(props);
//   }

  const CompareLayout = ({ classes }) => (
    <Grid container spacing={ 24 } justify='center' alignItems='center'>
      <Grid item xs={8} >
        <Paper className={ classes.root } color='secondary'>
          <Typography variant='title' gutterBottom>Stepper placeholder</Typography>
        </Paper>
      </Grid>

      <Grid item container justify='center' alignItems='center' spacing={ 24 }>
        <Grid item lg={ 4 }>
          <SteamUserSearch paperStyle={ classes.paper } />
        </Grid>
        <Grid item lg={ 4 }>
          <SteamUserSearch paperStyle={ classes.paper } />
        </Grid>
      </Grid>

    </Grid>
);






export default withStyles(styles)(CompareLayout);
