import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';
import { mainTheme } from '../styles/Styles';

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    backgroundColor: mainTheme.palette.primary.main,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
})


const Game = ({ classes }) => (
  <Paper className={ classes.paper } >
    <Grid container>

      <Grid
        item
        lg={12}>

        <Typography
          variant='title'
          gutterBottom>
          Stepper placeholder
        </Typography>
      </Grid>

    </Grid>
  </Paper>
)

export default withStyles(styles)(Game);
