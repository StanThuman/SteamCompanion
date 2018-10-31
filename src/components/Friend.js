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
    direction='column'>

    <Grid  item
      lg={ 12 }>
      <Grid container justify='center' alignItems='center'>
        <Grid item lg={ 12 }>
          <PermIdentityIcon />
          </Grid>
      </Grid>
    </Grid>

    <Grid item lg={ 12 }>
      <Typography>
        { name }
      </Typography>
    </Grid>

  </Grid>
)

export default (Friend);
