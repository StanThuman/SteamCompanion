import { 
  FETCH_GAMESINCOMMON,
  REQUEST_USER_GAMELISTS,
  RECEIVED_USER_GAMELIST,
  RECEIVED_TOTAL_USER_GAMELISTS

 } from './types';

export const requestUserGameLists = () => ({
  type: REQUEST_USER_GAMELISTS
})

export const recieveUserGameList = (json) => ({
  type: RECEIVED_USER_GAMELIST,
  gameList: json.games
})

export const receivedTotaluserGameLists = () => ({
  type: RECEIVED_TOTAL_USER_GAMELISTS
})

export const fetchGamesInCommon = userList => (
  (dispatch) => {
    //change state loading to true
    console.log("inside fetch")
    dispatch(requestUserGameLists());
    let idCounter = 0;
    let comparedGames = 0;
    do{
      console.log("HERE")
      console.log(userList)
      fetch('http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=27626CB113371E137A46F6CD03D0DD66&steamid='
      + userList[idCounter].steamId + '&include_appinfo=1&format=json')
      .then(
        response => response.json(),
        error => console.log("an error has occured retrieves user game list")
        )
        .then( json => {
          if(idCounter == 0)
            comparedGames = json.response.game_count;
          
            //compare game lists
            //if compare == 0
            // stop comparing
            //end
            //display no games in common
            //dispatch action no games to compare          
            console.log("HERE");
            console.log(json);
 
          dispatch(recieveUserGameList(json.response));
        });
        
        idCounter++;
      }
    while(comparedGames > 0 && idCounter < userIds.length)

    dispatch(receivedTotaluserGameLists());

  }); //return





export const gameList = (state = [], action) => {
  switch(action.type){
    case FETCH_GAMESINCOMMON:
      return state;

    case REQUEST_USER_GAMELISTS:
    //loading state
    
    return state;

    case RECEIVED_USER_GAMELIST:
    return [ ...state, ...action.gameList ]


    default:
      return state;

  }
}
