import { 
  FETCH_GAMESINCOMMON,
  REQUEST_USER_GAMELISTS,
  RECEIVED_USER_GAMELIST,
  RECEIVED_TOTAL_USER_GAMELISTS,
  COMPARE_USER_GAMELIST,
  UPDATE_GAMELIST_LOAD_COUNTER

 } from './types';

export const requestUserGameLists = () => ({
  type: REQUEST_USER_GAMELISTS
})

export const recieveUserGameList = (json) => ({
  type: RECEIVED_USER_GAMELIST,
  gameList: json.games
})
export const compareGameLists = (json) => ({
  type: COMPARE_USER_GAMELIST,
  newGameList: json.games
})

export const receivedTotaluserGameLists = () => ({
  type: RECEIVED_TOTAL_USER_GAMELISTS
})

export const updateGameListLoadCounter = (gameListLength) => ({
  type: UPDATE_GAMELIST_LOAD_COUNTER,
  gameListLength 
})

export const fetchGamesInCommon = userList => (
  (dispatch) => {
    //change state loading to true    
    dispatch(requestUserGameLists());
    // 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=27626CB113371E137A46F6CD03D0DD66&steamid='
    //+ userList[userCounter].steamId + '&include_appinfo=1&format=json'
    let url = new URL('http://localhost:3000/api/games');

    userList.map((element, index) => {
      console.log(element.steamId);
      url.searchParams.append('userList[]', element.steamId);
      
    })
    console.log(url);

    return fetch(url)
      .then(
        response => response.json(),
        error => console.log("an error has occured retrieves user game list"))
      .then( json => {        
        //json = JSON.parse(json);
        // if(userCounter > 0)
        //   dispatch(compareGameLists(json.response));
        // else
        console.log(json);
        json = JSON.parse(json);
          dispatch(recieveUserGameList(json.response));
      });              
       
  });


  const compareCurrentWithNewGameList = ( gameListState, action) => {
    console.log("current gamelist")
    console.log(gameListState);
    console.log("new gameList")
    console.log(action.newGameList)


    let mergedGameList = [];
    for(let gameListIterator = 0; gameListIterator < gameListState.gameList.length; gameListIterator++){
      
      for(let newGameListIterator = 0; newGameListIterator < action.newGameList.length; newGameListIterator++){ 
        if(gameListState.gameList[gameListIterator].appid === action.newGameList[newGameListIterator].appid){
          mergedGameList.push(gameListState.gameList[gameListIterator]);
        }

      }
    }
    console.log('mergedGameList')
    console.log(mergedGameList);


    
    return { ...gameListState, gameList: [ ...mergedGameList ]}
  }
 
export const gameData = (state = { gameList: [], isLoading: false}, action) => {
  switch(action.type){
    case FETCH_GAMESINCOMMON:
      return { ...state, isLoading: true };

    case REQUEST_USER_GAMELISTS:
    //loading state    
      return { ...state, isLoading: true };    

    case RECEIVED_USER_GAMELIST:     
      return { ...state, gameList: [ ...action.gameList.map( game => ({
        appid: game.appid,
        name: game.name,
        icon: `http://media.steampowered.com/steamcommunity/public/images/apps/${ game.appid }/${ game.img_logo_url }.jpg`,      
        }))]
      }

    case COMPARE_USER_GAMELIST:
      return compareCurrentWithNewGameList(state, action);

      

    case RECEIVED_TOTAL_USER_GAMELISTS:
      return { ...state, isLoading: false }

    default:
      return state;

  }
}



