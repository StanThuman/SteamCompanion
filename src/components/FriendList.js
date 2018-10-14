import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { mainTheme } from '../styles/Styles';
import Friend from './Friend';

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

const styles = theme => ({
  paper: {
      ...theme.mixins.gutters(),
      height: '100%',
      backgroundColor: mainTheme.palette.primary.main,
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2
    },
})

const FriendList = ({ classes }) => (
  <Paper className={ classes.paper }>
    <Typography variant='title' gutterBottom>
      Stuff
    </Typography>
    <Divider />
    <Friend />
    <Friend />
    <Friend />
    <Friend />
    <Friend />
  </Paper>
)


export default withStyles(styles)(FriendList);
