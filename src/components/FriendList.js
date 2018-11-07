import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { mainTheme } from '../styles/Styles';
import Friend from './Friend';

const styles = theme => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    ...theme.mixins.gutters(),
  
    backgroundColor: mainTheme.palette.primary.main,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  rowHeight: {

  }
});

const FriendList = ({ classes, userList, buttonHandler, header}) => (

    <Paper className={ classes.paper }>
      <Grid container>
        <Grid item lg={12}>
          <Grid container>
            <Grid item  lg={8}>

              <Typography variant='title'
                gutterBottom>
                  { header }
              </Typography>
            </Grid>

            <Grid item lg={4} container justify='flex-end' alignItems='flex-end'>
              <Typography variant='title'
                gutterBottom>
                  { userList.length}/10
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          </Grid>

          <Grid container direction='column'>
            { userList.map( user =>
                <Grid key={ user.id } item lg={12}>
                  <Friend name={ user.userName } />
                </Grid>)
            }
          </Grid>

        { userList.length < 1 ? (
            <Grid container item lg={12} direction='row' justify='center' alignItems='flex-end' spacing={ 8 }>
              <Grid item>
                <div className={ classes.rowHeight}>
                  <Typography color={ mainTheme.white }>
                    No users in list
                  </Typography>
                </div>
              </Grid>
            </Grid>
          ) : (
            <Grid container
              item
              direction='row'
              justify='flex-end'
              alignItems='flex-end'
              lg={ 12 }>

              <Button color='secondary'
                variant='contained'
                onClick={ buttonHandler }>
                  Compare
              </Button>

            </Grid>
          )}
      </Grid>
    </Paper>

)

FriendList.propTypes = {
  userList: PropTypes.arrayOf(PropTypes.shape({
    steamId: PropTypes.string,
    userName: PropTypes.string
  })).isRequired,
  counter: PropTypes.number,
  classes: PropTypes.object

}
// { userList.length > 1 ? (
//   <Grid item
//     lg={ 12 }>
//
//       <Grid container   direction='row'
//         justify='flex-end'
//         alignItems='flex-end'>
//
//         <Button color='secondary' variant='contained' onClick={ buttonHandler }>
//           Compare
//         </Button>
//       </Grid>
//     </Grid>
//
// ): (
//   <Grid item lg={12}>
//     <Grid container direction='row' justify='center' alignItems='flex-end' spacing={ 8 }>
//       <Grid item>
//         <div className={ classes.rowHeight}>
//           <Typography >No users in list</Typography>
//           </div>
//       </Grid>
//     </Grid>
//     </Grid>
// )}


export default withStyles(styles)(FriendList);
