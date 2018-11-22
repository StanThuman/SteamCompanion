import { combineReducers } from 'redux';
import { routeNumber } from './navHighlight';
import { steamUserSearch } from './users';
import { gameData } from './games';

export default combineReducers({
  routeNumber, 
  steamUserSearch,
  gameData
  
});
