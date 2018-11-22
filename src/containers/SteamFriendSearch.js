import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Textfield from '@material-ui/core/Textfield';
import FriendSearch from '../components/FriendSearch';
import { fetchUserName, updateUserName } from '../redux/actions';

const SteamFriendSearch = ({ userList, userNameInput, onChange, onSubmit }) => (
  <FriendSearch>
    <form onSubmit={ (event) => {
      event.preventDefault();
      onSubmit(event, userList, userNameInput)
    }}>
      <Grid container item lg={ 12 }>
        <Textfield
          fullWidth
          autoComplete='off'
          label= 'Steam Username'
          onChange={ onChange }
          value={ userNameInput }
          margin='normal' />
      </Grid>

      <Grid container item lg={ 12 } direction='row' justify='flex-end' alignItems='flex-end'>
        <Button
          type='submit'
          variant='contained'
          color='secondary'>
          Search
        </Button>
      </Grid>
    </form>
  </FriendSearch>
);

const mapStateToProps = (state) => ({
  userList: state.steamUserSearch.userList,
  userNameInput: state.steamUserSearch.userNameInput
})

const mapDispatchToProps = dispatch => ({
  onChange: (event) => {
    dispatch(updateUserName(event.target.value))
  },
  onSubmit: (event,  userList, userNameInput) => {
    //check if friend username is in current list    
    if(userList.length < 10){
      let userExists = false;
      let listIterator = 0;

      while(!userExists && listIterator < userList.length){
        if(userNameInput.toLowerCase() === userList[listIterator].userName.toLowerCase())
          userExists = true;
        listIterator++;
      }

      if(!userExists)
        dispatch(fetchUserName(userNameInput));
      else
        console.log("user already in list");
      //TODO: handle error
    }
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(SteamFriendSearch)
