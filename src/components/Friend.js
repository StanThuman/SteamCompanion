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

const Friend = ({ classes }) => (
  <Grid container
    direction='column'
    alignItems='center'
    justify='center'>

    <Grid item lg={ 12 }>
      <PermIdentityIcon className={ classes.iconAlignment } />
    </Grid>

    <Grid item lg={ 12 }>
      <Typography
        variant='text'
        align='center'>
        username
      </Typography>
    </Grid>

  </Grid>
)

export default withStyles(styles)(Friend);
