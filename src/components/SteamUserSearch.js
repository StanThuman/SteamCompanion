import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Textfield from '@material-ui/core/Textfield';

export const SteamUserSearch = ({ paperStyle }) => (
  <Paper className={ paperStyle } color='secondary'>
    <Typography variant='title' gutterBottom>Search Steam Users</Typography>
    <Divider />
    <Grid container  spacing={ 24 }>
      <Grid item md={ 4 }>
        <Textfield
          label='Steam Username'
          onChange={ () => {}}
          margin='normal'
        />
        <Button variant='contained' color='secondary'>Search</Button>
      </Grid>
      <Grid item md={ 2 }>

      </Grid>

    </Grid>
  </Paper>
)

export default SteamUserSearch;
