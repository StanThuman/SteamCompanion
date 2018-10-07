import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import join from 'lodash/join';
import Fade from '@material-ui/core/Fade';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = themes => ({
  root: {

  },
  paper: {
    padding: 25,
    backgroundColor: '#c1d5e0'
  }
})

class CompareLayout extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { classes } = this.props;
    return(
      <Grid container justify='center' alignItems='center' spacing={ 24 }>
        <Grid item md={ 8 }>
        <Paper className={ classes.paper } color='secondary'>
          <Typography variant='title' gutterBottom>Stepper placeholder</Typography>
          



        </Paper>
        </Grid>
      </Grid>
    );
  }

}



export default withStyles(styles)(CompareLayout);
