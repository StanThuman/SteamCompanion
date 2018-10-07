/* action types */
export const CHANGE_PAGEROUTE = 'CHANGE_PAGEROUTE';
export const SET_INITIALROUTE = 'SET_INITIALROUTE';


/* action creators   */
export const changePageRoute = routeNumber => ({
    type: CHANGE_PAGEROUTE,
    routeNumber
  });

// export const initialPageRoute = pathName => ({
//   type: SET_INITIALROUTE,
//   pathName
// })
