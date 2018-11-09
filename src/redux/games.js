import {} from './types';

export const fetchGamesInCommon = (userList) => ((dispatch) => {
  //change state loading to true
  dispatch(requestUserGameList())

  return ( () => {
    let idCounter = 0;
    do{
      while(comparedGames > 0 && idCounter < userIds.length)
      fetch('http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=27626CB113371E137A46F6CD03D0DD66&steamid='
        + userIds[idCoutner] + '&include_appinfo=1&format=json')
      .then(
        response => response.json(),
        error => console.log("an error has occured retrieves user game list")
      )
      .then( json => {

        dispatch(recieveUserGameList(json.response);
      });

      idCounter++;
    }

    dispatch(fetchingUserGameList());

  }); //return
}) // end function




export const gameList = (state, action) => {
  switch(action.type){
    case

  }
}
