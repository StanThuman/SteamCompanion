import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import join from 'lodash/join';
import Fade from '@material-ui/core/Fade';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

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

class HomeLayout extends Component {

  render(){
    const { classes } = this.props;
    return(

        <Grid container justify='center' alignItems='center' spacing={ 24 }>
          <Grid container item direction='row' xs={ 8 } alignItems='stretch' spacing={ 24 }  >
            <Grid  item  xs={ 12 } sm={12} md={8}>
              <Paper className={ classes.paper }  color='secondary'>
                <Typography variant='title' gutterBottom>Welcome to Steam companion!</Typography>
                <Divider />
                <br />
                <Typography variant='body1' >
                  This is an application I've been working on making in my own time
                  just for funsies. The "compare" tab will take you to the
                  my game comparison tool. You can select the steam users you want to
                  compare games with to see what games are owned by each user.
                  I am constantly updating it but for now, it's in a functional state.                                   
                  
                </Typography>
                
                
              </Paper>
            </Grid>
            <Grid  item  xs={ 12 } sm={12} md={4}>
              <Paper className={ classes.paper }>
                <div>Home component</div>
                <Divider />
                <ul>
                  <li>{ join(['a','c','d','e'], '!!')}</li>
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

          <Grid container item direction='row' xs={ 8 } spacing={ 24 }  >
            <Grid  item  xs={ 4 }>
              <Paper className={ classes.paper }>
                <div>Home component</div>
                <Divider />
                <ul>
                  <li>{ join(['a','c','d','e'], '!!')}</li>
                  <li>TODOs</li>
                  <li>game filtering</li>
                  <li>wishlist filter</li>
                  <li>Game comparison</li>
                </ul>
                <br />
                <Button variant="contained" color='secondary'>Test Button</Button>
              </Paper>
            </Grid>
            <Grid  item  xs={ 4 }>
              <Paper className={ classes.paper }>
                <div>Home component</div>
                <Divider />
                <ul>
                  <li>{ join(['a','c','d','e'], '!!')}</li>
                  <li>TODOs</li>
                  <li>game filtering</li>
                  <li>wishlist filter</li>
                  <li>Game comparison</li>
                </ul>
                <br />
                <Button variant='contained' color='secondary'>Test Button</Button>
              </Paper>
            </Grid>
            <Grid  item  xs={ 4 }>
              <Paper className={ classes.paper }>
                <div>Home component</div>
                <Divider />
                <ul>
                  <li>{ join(['a','c','d','e'], '!!')}</li>
                  <li>TODOs</li>
                  <li>game filtering</li>
                  <li>wishlist filter</li>
                  <li>Game comparison</li>
                </ul>
                <br />
                <Button variant="contained" color='secondary'>Test Button</Button>
              </Paper>
            </Grid>
          </Grid>

          <Grid container item  xs={ 8 } spacing={24}>
              <Grid item xs={12} >
                <Paper className={ classes.paper }>
                  <div>Home component</div>
                  <Divider />
                  <ul>
                  <li>{ join(['a','c','d','e'], '!!')}</li>
                  <li>TODOs</li>
                  <li>game filtering</li>
                  <li>wishlist filter</li>
                  <li>Game comparison</li>
                  </ul>
                  <br />
                  <Button variant="contained" color='secondary'>Test Button</Button>
                </Paper>
              </Grid>
            </Grid>
          <Grid container item  xs={ 8 } spacing={24}>
              <Grid item xs={12} >
                <Paper className={ classes.paper }>
                  <div>Home component</div>
                  <Divider />
                  <ul>
                  <li>{ join(['a','c','d','e'], '!!')}</li>
                  <li>TODOs</li>
                  <li>game filtering</li>
                  <li>wishlist filter</li>
                  <li>Game comparison</li>
                  </ul>
                  <br />
                  <Button variant="contained" color='secondary'>Test Button</Button>
                </Paper>
              </Grid>

          </Grid>
        </Grid>

      )
  }
}
export default withStyles(styles)(HomeLayout);
