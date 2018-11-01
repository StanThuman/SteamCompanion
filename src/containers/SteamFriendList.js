import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendList from '../components/FriendList';
//import { fetchUserName, updateUserName } from '../redux/actions';

const mapStateToProps = state => ({
  header: 'Current Search List',
  userList: state.steamUserSearch.userList
})

const mapDispatchToProps = ({ dispatch }) => ({
  buttonHandler: (event) => {
    console.log("CLICKED ME");
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendList)
