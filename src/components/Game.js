import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
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


const Game = ({ classes, logo, name }) => (
  <Paper className={ classes.paper } >
    <Grid container>

      <Grid
        item lg={3}>
        <img src={ logo } />
      </Grid>
      <Grid item lg={2}>
        <Grid item lg={12}>
            <Typography variant='title' gutterBottom>
              Name
            </Typography>
            <Divider />
        </Grid>
        <Grid item lg={12}>

          <Typography
            variant='body1'
            >
            {name}
          </Typography>

        </Grid>
      </Grid>

    </Grid>
  </Paper>
)

export default withStyles(styles)(Game);
