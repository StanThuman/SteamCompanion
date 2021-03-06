import React, { Component } from 'react';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    flexGrow: 1
  },
  paper: {
    padding: 25,
    backgroundColor: '#c1d5e0'
  }
})

class AboutLayout extends Component {

  render(){
    const { classes } = this.props;
    return(
      <Grid container justify='center' alignItems='center' spacing={ 24 }>
        <Grid container item direction='row' xs={ 8 } spacing={ 24 }  >
          <Grid  item  xs={ 12 } sm={12} md={12}>
            <Paper className={ classes.paper } color='secondary'>
              <Typography variant='title' gutterBottom>About Page</Typography>
              <Divider />
              <br />
              <Typography variant='body1' >
                This is an application I'm making in my own time
                just for funsies. The "compare" tab will take you to the
                my game comparison tool. You select the steam users you want to
                compare games with, and the games in common should load up blah
                blah blah blah blah blah blah blah blah blah blah blah
                blah blah
                blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah
                <br />
                THIS JUST IN
                <br />
                blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah
              </Typography>
              <br />
              <Button variant='contained' color='secondary'>Test Button</Button>
            </Paper>
          </Grid>
          <Grid  item  xs={ 12 } sm={12} md={4}>
            <Paper className={ classes.paper }>
              <div>Home component</div>
              <Divider />
              <ul>
                <li>TODOs</li>
                <li>game filtering</li>
                <li>wishlist filter</li>
                <li>Game comparison</li>
              </ul>
              <br />
              <Button variant='contained' color='secondary'>Test Button</Button>
            </Paper>
          </Grid>



        </Grid>





      </Grid>
    );
  }
}


export default withStyles(styles)(AboutLayout)
