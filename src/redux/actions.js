/* action types */
export const CHANGE_PAGEROUTE = 'CHANGE_PAGEROUTE';
export const SET_INITIALROUTE = 'SET_INITIALROUTE';
//export const SEARCH_USERNAME = 'SEARCH_USERNAME';
export const UPDATE_USERNAME_INPUT = 'UPDATE_USERNAME_INPUT';
export const REQUEST_USERNAME = 'REQUEST_ USERNAME';
export const FETCH_USERNAME = 'FETCH_USERNAME_';

export const FETCH_USERNAME_SUCCESS = 'FETCH_USERNAME_SUCCESS';
export const FETCH_USERNAME_NOT_FOUND = 'FETCH_USERNAME_NOT_FOUND';
export const FETCH_USERNAME_FAILURE = 'FETCH_USERNAME_FAILURE';
export const RECEIVE_USERNAME = 'RECEIVE_USERNAME';

export const ADD_USERNAMETOLIST = 'ADD_USERNAMETOLIST';
export const REMOVE_USERNAMEFROMLIST = 'REMOVE_USERNAMEFROMLIST';
export const FETCH_GAMESINCOMMON = 'FETCH_GAMESINCOMMON';

//const STEAM_API_KEY = '26F6DB692027CC7884B8A067D190F6DF';
const STEAM_API_KEY = '27626CB113371E137A46F6CD03D0DD66';
/* action creators   */
export const changePageRoute = routeNumber => ({
    type: CHANGE_PAGEROUTE,
    routeNumber
  });

export const updateUserName = userName => ({
  type: UPDATE_USERNAME_INPUT,
  userName
});

// export const searchUserName = userName => ({
//     type: SEARCH_USERNAME,
//     userName
//   });
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

export const fetchUserName = userName => {
  return function( dispatch ) {
    dispatch(requestUserName(userName)); // setup loading ui state
    //make api request
    return fetch(`http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001
      ?key=${STEAM_API_KEY}&vanityurl=${userName}`.replace(/\s/g, ''))
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
}};




// export const addUserNameToList = userName => ({
//   type: ADD_USERNAMETOLIST,
//   userName
// });
//
// export const removeUserNameFromList = userName => ({
//   type: REMOVE_USERNAMEFROMLIST,
//   userName
// });
//
// export const fetchGamesInCommon = userNames => ({
//   type: FETCH_GAMESINCOMMON,
//   userNames
// });


// export const initialPageRoute = pathName => ({
//   type: SET_INITIALROUTE,
//   pathName
// })
