import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Textfield from '@material-ui/core/Textfield';
import { withStyles } from '@material-ui/core/styles';
import { mainTheme } from '../styles/Styles';

const styles = theme => ({

  paper: {
      ...theme.mixins.gutters(),
      height: '100%',
      backgroundColor: mainTheme.palette.primary.main,
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2
    },
});

export const FriendSearch = ({ title, classes, handleClick }) => (

      <Paper className={ classes.paper } color='primary'>
        <Grid container>

          <Grid item container md={ 12 }>
            <Typography variant='title' gutterBottom>Search Steam Users</Typography>
          </Grid>

          <Divider />

          <Grid item container md={ 12 } >
            <Textfield
              label={ title }
              fullWidth
              onChange={ () => {}}
              margin='normal' />
          </Grid>

          <Grid item md={ 12 } container direction='row-reverse'>
            <Button variant='contained' color='secondary' onClick={ handleClick }>Search</Button>
          </Grid>

        </Grid>
      </Paper>
);

export default withStyles(styles)(FriendSearch);
