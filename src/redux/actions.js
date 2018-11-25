/* action types */
import {
  CHANGE_PAGEROUTE,
  SET_INITIALROUTE,
  UPDATE_USERNAME_INPUT,
  REQUEST_USERNAME,
  FETCH_USERNAME,
  FETCH_USERNAME_SUCCESS,
  FETCH_USERNAME_NOT_FOUND,
  FETCH_USERNAME_FAILURE,  
  RECEIVE_USERNAME,
  ADD_USERNAMETOLIST,
  REMOVE_USERNAMEFROMLIST,
  FETCH_GAMESINCOMMON
} from './types';





//http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/
//?key=27626CB113371E137A46F6CD03D0DD66&steamid=76561197960434622&include_appinfo=1&format=json
//image_logo_url from response is the bigger one

/* action creators   */
export const changePageRoute = routeNumber => ({
    type: CHANGE_PAGEROUTE,
    routeNumber
  });

export const updateUserName = userName => ({
  type: UPDATE_USERNAME_INPUT,
  userName
});

export const requestUserName = userName => ({
    type: REQUEST_USERNAME,
    userName
});

export const requestUsernameNotFound = () => ({
  type: FETCH_USERNAME_NOT_FOUND
})


let userId = 0;
export const receiveUserName = (userName, json) => ({
  type: RECEIVE_USERNAME,
  userName,
  id: userId++,
  steamId: json.steamid,
  receivedAt: Date.now()
});

export const fetchUserName = userName => (
  ( dispatch ) => {
    dispatch(requestUserName(userName)); // setup loading ui state
    //make api request
    // return fetch(`http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001
    //   ?key=${STEAM_API_KEY}&vanityurl=${userName}`.replace(/\s/g, ''))
    return fetch(`http://localhost:3000/users/${userName}`)
      .then(
        response => {
          console.log('found user in api')
          return response.json();
        },
        error => console.log('error fetching username data.')
      )
    .then( (json) => {
        console.log(json.response);
        if('message' in json.response)
          dispatch(requestUsernameNotFound());
        else
          dispatch(receiveUserName(userName, json.response));
    });
});



