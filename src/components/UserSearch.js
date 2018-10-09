import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Textfield from '@material-ui/core/Textfield';




export const UserSearch = ({ title, classes, handleClick }) => (
  <Grid item md={4} >
      <Paper className={ classes.root } color='primary'>
        <Grid container alignItems='baseline'>
          <Grid item md={ 12 }>
            <Typography variant='title' gutterBottom>Search Steam Users</Typography>
            <Divider />
          </Grid>
          <Grid item md={ 8 }>
            <Textfield
              label={ title }

              onChange={ () => {}}
              margin='normal' />
          </Grid>

          <Grid item md={ 2 }>
            <Button variant='contained' color='secondary' onClick={ handleClick }>Search</Button>
          </Grid>
        </Grid>
      </Paper>

    </Grid>
)

export default UserSearch;
