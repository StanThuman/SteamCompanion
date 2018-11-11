import { combineReducers } from 'redux';
import { routeNumber } from './navHighlight';
import { steamUserSearch } from './users';
import { gameList } from './games';

export default combineReducers({
  routeNumber, 
  steamUserSearch,
  gameList
});
