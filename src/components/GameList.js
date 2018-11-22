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
  <React.Fragment>
    {      
      gameList.map(game => {        
        count++;
        return(
          <Grid item key={ count } lg={ 12 }>
            <Game icon={ game.icon } name={ game.name }/>
          </Grid>
      );
    })
    

    }
  </React.Fragment>);

  React.propTypes = {
    gameList: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        icon: PropTypes.string
      })
    )
  }

export default GameList;
