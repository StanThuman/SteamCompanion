/* action types */
export const CHANGE_PAGEROUTE = 'CHANGE_PAGEROUTE';
export const SET_INITIALROUTE = 'SET_INITIALROUTE';
export const SEARCH_USERNAME = 'SEARCH_USERNAME';
export const ADD_USERNAMETOLIST = 'ADD_USERNAMETOLIST';
export const REMOVE_USERNAMEFROMLIST = 'REMOVE_USERNAMEFROMLIST';
export const FETCH_GAMESINCOMMON = 'FETCH_GAMESINCOMMON';

/* action creators   */
export const changePageRoute = routeNumber => ({
    type: CHANGE_PAGEROUTE,
    routeNumber
  });

export const searchUserName = userName => ({
    type: SEARCH_USERNAME,
    userName
  });

export const addUserNameToList = userName => ({
  type: ADD_USERNAMETOLIST,
  userName
});

export const removeUserNameFromList = userName => ({
  type: REMOVE_USERNAMEFROMLIST,
  userName
});

export const fetchGamesInCommon = userNames => ({
  type: FETCH_GAMESINCOMMON,
  userNames
});


// export const initialPageRoute = pathName => ({
//   type: SET_INITIALROUTE,
//   pathName
// })
