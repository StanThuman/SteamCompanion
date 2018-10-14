import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { mainTheme } from '../styles/Styles';
import Friend from './Friend';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

const styles = theme => ({
  paper: {
      ...theme.mixins.gutters(),
      height: '100%',
      backgroundColor: mainTheme.palette.primary.main,
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2
    },
})

const FriendList = ({ classes }) => (

    <Paper className={ classes.paper }>
      <Grid container spacing={8}>
        <Grid item  lg={12}>
          <Typography variant='title' gutterBottom>
            Current Search List
          </Typography>
          <Divider />
        </Grid>

        <Grid item container lg={12} spacing={8}>

          <Grid item lg={2} >
            <Friend />
          </Grid>

          <Grid item lg={2}>
            <Friend  />
          </Grid>

          <Grid item lg={2} >
            <Friend />
          </Grid>

          <Grid item lg={2}>
            <Friend  />
          </Grid>
          <Grid item lg={2} >
            <Friend />
          </Grid>

          <Grid item lg={2}>
            <Friend  />
          </Grid>
        </Grid>
      </Grid>
    </Paper>

)


export default withStyles(styles)(FriendList);
