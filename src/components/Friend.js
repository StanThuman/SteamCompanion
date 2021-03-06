import React from 'react';
import Grid from '@material-ui/core/Grid';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  iconAlignment: {
    backgroundColor: 'red'
  }
});

const Friend = ({ classes, name }) => (
  <Grid container
    direction='row'
    justify='flex-start'
    alignItems='center'>

    <Grid  item
       lg={ 2 } md={ 2 }>
        <PermIdentityIcon />
    </Grid>

    <Grid item lg={ 10 } md={ 10 }>
      <Typography>
        { name }
      </Typography>
    </Grid>
  </Grid>




)

export default (Friend);
