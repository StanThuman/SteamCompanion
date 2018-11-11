import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


import Game from './Game';
const styles = theme => ({
  root: {}
})

let count=-1;
const GameList = ({ classes, gameList }) => (
  <Grid item container lg={12}>
    {      
      gameList.map(game => {        
        count++;
        return(
          <Grid item key={ count } lg={ 12 }>
            <Game logo={ game.img_logo_url } name={ game.name }/>
          </Grid>
      );
    })
    

    }
  </Grid>);

  React.proptypes = {
    gameList: PropTypes.array
  }

export default GameList;
