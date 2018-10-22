import {
  SEARCH_USERNAME,
  UPDATE_USERNAME_INPUT,
  FETCH_USERNAME,
  RECEIVE_USERNAME,
  FETCH_USERNAME_SUCCESS,
  FETCH_USERNAME_FAILURE,
  REQUEST_USERNAME,
  ADD_USERNAMETOLIST,
  REMOVE_USERNAMEFROMLIST,
  FETCH_GAMESINCOMMON,
} from './actions';

const STEAM_API_KEY = '26F6DB692027CC7884B8A067D190F6DF';

const initialState = {
  userList: []
}


export const steamUserSearch = (state = initialState, action) => {
  switch(action.type){
    case UPDATE_USERNAME_INPUT:
      console.log(state);
      console.log(action);
      return { ...state, userNameInput: action.userName };

    case SEARCH_USERNAME:

      return { ...state, userNameInput: action.userName };

    case REQUEST_USERNAME:
      // console.log("state: ")
      // console.log(state);
      // console.log(action);
      return { ...state,
        userNameInput: action.userName,
        loading: true
      };


    case RECEIVE_USERNAME:
      return {
        ...state,
        counter: 5,
        loading: false,
        userList: [ ...state.userList,
          { userName: action.userName, id: action.id, steamId: action.steamId }
        ]
      };

    default:
      return state;
  }
}
