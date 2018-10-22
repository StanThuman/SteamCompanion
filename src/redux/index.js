import { combineReducers } from 'redux';
import { routeNumber } from './navHighlight';
import { steamUserSearch } from './users';

export default combineReducers({
  routeNumber, steamUserSearch
});
