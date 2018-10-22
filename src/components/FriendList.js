import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import { mainTheme } from '../styles/Styles';
import Friend from './Friend';

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    height: '100%',
    backgroundColor: mainTheme.palette.primary.main,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const FriendList = ({ classes, userList, counter }) => (
  <Paper className={ classes.paper }>
    <Grid container spacing={ 8 }>
      <Grid item lg={ 12 }>
        <Typography variant='title'
          gutterBottom>
            Current Search List
            <Divider />
        </Typography>
      </Grid>
    </Grid>

    <Grid item container lg={ 12 } spacing={ 8 }>


      {
        userList.map( user =>
          <Grid key={ user.id } item lg={2}>
            <Friend name={ user.userName } />
          </Grid>)
      }
    </Grid>
  </Paper>
)

FriendList.propTypes = {
  userList: PropTypes.arrayOf(PropTypes.shape({
    steamId: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired
  })).isRequired,
  counter: PropTypes.number,
  classes: PropTypes.object

}



export default withStyles(styles)(FriendList);
