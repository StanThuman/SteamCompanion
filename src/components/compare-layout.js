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
import SteamFriendList from '../containers/SteamFriendList';
import GameList from './GameList';

const styles = themes => ({
  root:{
    flexGrow: 1
  },
  paper: {
    ...themes.mixins.gutters(),
    backgroundColor: mainTheme.palette.primary.main,
    paddingTop: themes.spacing.unit * 2,
    paddingBottom: themes.spacing.unit * 2
  },
  marginSetup: {
    marginBottom:8
  }

});

const CompareLayout = ({ classes }) => (
<Grid
  container

  spacing={ 24 }
 className={classes.root} >

  <Grid item lg={ 12 }>
    <Grid container
      direction='row'
      justify='center'
      alignItems='center'
      spacing={ 24 } >
      <Grid item lg={8}>
        <Paper className={ classes.paper } >
          <Typography variant='title'
          gutterBottom>Stepper placeholder
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </Grid>

  <Grid item lg={ 12 }>
    <Grid container
      direction='row'
      justify='center'
      alignItems='flex-start'
      spacing={ 24 }>

      <Grid item lg={ 2 }>
        <Grid item lg={ 12 } className={classes.marginSetup}>
          <SteamFriendSearch />
        </Grid>
        <Grid item lg={ 12} className={classes.marginSetup}>
            <SteamFriendList />
        </Grid>
      </Grid>

      <Grid item container lg={ 6 } spacing={ 8 }>
        <GameList />
      </Grid>


    </Grid>
  </Grid>






  </Grid>


)


/*
<Grid container
  direction='row'
  justify='center'
  alignItems='center' spacing={ 24 }>

  <Grid container
    item lg={8}
    spacing={ 8 }>

    <Grid  item lg={ 3 }>
      <Grid item lg={ 12 } className={classes.marginSetup}>
        <SteamFriendSearch />
      </Grid>

      <Grid item lg={ 12}>
        <SteamFriendList />
      </Grid>
    </Grid>

    <Grid container item lg={9} spacing={8}><GameList /></Grid>
  </Grid>
  </Grid>
*/



export default withStyles(styles)(CompareLayout);
