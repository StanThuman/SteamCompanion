import { CHANGE_PAGEROUTE, SET_INITIALROUTE } from './actions';


export const routeNumber = ( state = 0, action ) => {
  // console.log("REDUCER: state: " + state);
  // console.log(action);
  switch(action.type){
    case CHANGE_PAGEROUTE:
      return action.routeNumber;
      default:
        return state;
  }
}
