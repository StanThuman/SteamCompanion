import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Textfield from '@material-ui/core/Textfield';
import FriendSearch from '../components/FriendSearch';
import { fetchUserName, updateUserName } from '../redux/actions';

const SteamFriendSearch = ({ dispatch }) => {
  let currentUserNameInput;
  return(
    <FriendSearch>
      <Grid item container lg={ 12 } >
        <Textfield
          fullWidth
          label= 'Steam Username'
          onChange={ () => {dispatch(updateUserName(currentUserNameInput.value))} }
          inputRef={ node => currentUserNameInput = node }
          margin='normal' />
      </Grid>

      <Grid item md={ 12 } container direction='row-reverse'>
        <Button type='button'
          variant='contained'
          color='secondary'
          onClick={ () => {
            if(currentUserNameInput.value !== '')
              dispatch(fetchUserName(currentUserNameInput.value));
          }}
            >Search</Button>
      </Grid>

  </FriendSearch>);
}

export default connect()(SteamFriendSearch)
