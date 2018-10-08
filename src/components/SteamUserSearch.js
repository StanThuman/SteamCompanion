import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Textfield from '@material-ui/core/Textfield';

export const SteamUserSearch = ({ paperStyle }) => (
  <Grid item md={3} >

      <Paper className={ paperStyle } color='secondary'>
        <Grid container alignItems='baseline'>
          <Grid item md={ 12 }>
            <Typography variant='title' gutterBottom>Search Steam Users</Typography>
            <Divider />
          </Grid>
          <Grid item md={ 8 }>
            <Textfield
              label='Steam Username'

              onChange={ () => {}}
              margin='normal' />
          </Grid>

          <Grid item md={ 2 }>
            <Button variant='contained' color='secondary'>Search</Button>
          </Grid>
        </Grid>
      </Paper>

    </Grid>
)

export default SteamUserSearch;
