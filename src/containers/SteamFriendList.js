import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendList from '../components/FriendList';
import { fetchGamesInCommon } from '../redux/games';
//import { fetchUserName, updateUserName } from '../redux/actions';

const mapStateToProps = state => ({
  header: 'User List',
  userList: state.steamUserSearch.userList
})

const mapDispatchToProps = ( dispatch ) => ({
  buttonHandler: (event, userList) => {
    
    dispatch(fetchGamesInCommon(userList))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendList)
