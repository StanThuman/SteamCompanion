import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import join from 'lodash/join';
import Fade from '@material-ui/core/Fade';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { mainTheme } from '../styles/Styles';
import SteamFriendSearch from '../containers/SteamFriendSearch';
import FriendList from './FriendList';

const styles = themes => ({
  paper: {
    ...themes.mixins.gutters(),
    height: '100%',
    backgroundColor: mainTheme.palette.primary.main,
    paddingTop: themes.spacing.unit * 2,
    paddingBottom: themes.spacing.unit * 2
  }
});

const CompareLayout = ({ classes }) => (
  <Grid container
    spacing={ 24 }
    direction='row'
    justify='center'
    alignItems='stretch' >
    <Grid item container
      xs={ 8 }
      sm={ 8 }
      lg={8}
      spacing={24}>

      <Grid item xs={ 12 }>
        <Paper className={ classes.paper } >
          <Typography variant='title'
            gutterBottom>Stepper placeholder
          </Typography>
        </Paper>
      </Grid>

    </Grid>

    <Grid item
      container
      direction='row'
      justify='center'
      alignItems='stretch'
      lg={8} spacing={24}>

        <Grid item lg={4}>
          <SteamFriendSearch />
        </Grid>
        <Grid item lg={8}>
          <FriendList />
        </Grid>
  </Grid>
</Grid>)






export default withStyles(styles)(CompareLayout);
