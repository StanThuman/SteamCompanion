import React from 'react'

//routes used for server side rendering of api calls
//renderToString doesn't take data fetching into account
const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/home',
    component: Home
  }
  // {
  //   path: '/route/:id',
  //   component: name,
  //
  // }
];






export default routes;
