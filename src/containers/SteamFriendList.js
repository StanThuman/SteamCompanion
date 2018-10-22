import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendList from '../components/FriendList';
//import { fetchUserName, updateUserName } from '../redux/actions';

const mapStateToProps = state => {
  console.log(state)
  return ({
    userList: state.steamUserSearch.userList,
    counter : state.steamUserSearch.counter
  })
}

export default connect(mapStateToProps)(FriendList)
