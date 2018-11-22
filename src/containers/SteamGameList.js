import React, { Component } from 'react';

import { connect } from 'react-redux';
import GameList from '../components/GameList'
import { updateGameListLoadCounter } from '../redux/games';

class SteamGameList extends Component {
  
  constructor(props){
    super(props);
    //his.scrollHandler = this.props.scrollHandler.bind(this);
  }

  componentWillUnmount(){  }

  componentDidUpdate(prevProps, prevState){  }

  render() {
    
    return(
      <GameList {...this.props} />
    )
  
  }
}



const mapStateToProps = state => ({
  gameList: state.gameData.gameList,//.slice(0, state.gameListLoadCounter ),  
  // gameListLength: state.gameData.gameList.length,
  // dataLoading: state.gameData.isLoading,
  // gameListLoadCounter: state.gameListLoadCounter    
});

const mapDispatchToProps = dispatch => ({
  scrollHandler: (event) => {  
  },
  loadMoreGames: (gamstListLength) => {    
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(SteamGameList)
