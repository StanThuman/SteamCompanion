import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

const Game = ({ classes, icon, name }) => (
  <Paper className={ classes.paper } >
    <Grid container>

      <Grid
        item lg={4}>
        <img src={ icon } />
      </Grid>
      <Grid item container lg={8}>
        <Grid item lg={10}>
        
          <Typography
            variant='body1'>
               Name: {name}
          </Typography>

        </Grid>
      </Grid>

    </Grid>
  </Paper>
);

Game.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string
};
export default withStyles(styles)(Game);
