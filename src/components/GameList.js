import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


import Game from './Game';
const styles = theme => ({
  root: {}
})

let testNumber = [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
let count=-1;
const GameList = ({ classes, testList, gameList }) => (
  <React.Fragment>
    {
      testList.map(game => {
        count++;
        return(
          <Grid item key={ count } lg={ 12 }>
            <Game logo={ game.logo } name={ game.name }/>
          </Grid>
      )})


    }
  </React.Fragment>);

export default withStyles(styles)(GameList);
