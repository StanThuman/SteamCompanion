import React, { Component } from 'react';

import { connect } from 'react-redux';
import GameList from '../components/GameList'

const mapStateToProps = state => ({
  gameList: state.gameList,
  testList: [{
    logo: 'http://media.steampowered.com/steamcommunity/public/images/apps/10/af890f848dd606ac2fd4415de3c3f5e7a66fcb9f.jpg',
    name: 'Counter-Strike'
  }]
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(GameList)
