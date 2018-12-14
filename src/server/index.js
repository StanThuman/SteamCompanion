"use strict";
import qs from 'qs';
import "@babel/polyfill";
import express from 'express';
import apiRoutes from './apiRoutes';

//react imports
import React from 'react';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { logger } from 'redux-logger';

import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
//redux imports
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import{ Provider } from 'react-redux';

import App from '../components/App';
import rootReducer from '../redux/index';
import { mainTheme } from '../styles/Styles';

const app = express();
app.use(express.static('public')); //server public files to frontend


app.use('/', apiRoutes);

//callback for server requests
app.get('*', (req,res) => {
  console.log('universal');
  let initialState = {
    routeNumber: calculateRouteNumber(req.originalUrl)   
  };

  

  const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger));
  var reactPage = convertReactToString(req, store);
  //console.log(req.url);
  res.send(renderHtml(reactPage, initialState));
});

//listen for request on port 3000
app.listen(3000, () => {
  console.log("server running on port 3000")
});


//render react components and style to string
function convertReactToString(req, store){
  var context = {};
  const generateClassName = createGenerateClassName();
  const sheetsRegistry = new SheetsRegistry();
  const sheetsManager = new Map();
  const css = sheetsRegistry.toString();

  const markup = renderToString(
    <Provider store={ store }>
      <StaticRouter location={ req.url } context={{}}>
        <JssProvider registry={ sheetsRegistry } generateClassName={ generateClassName }>
          <MuiThemeProvider theme={ mainTheme } sheetsManager={ sheetsManager }>
            <React.Fragment>
              <CssBaseline />
              <App  />
            </React.Fragment>
          </MuiThemeProvider>
        </JssProvider>
      </StaticRouter>
    </Provider>
  );
  return({markup, css});
}

function calculateRouteNumber(route){
   
  switch(route){
    case '/compare':
      return 1;
    
    case '/about':
      return 3;
    
    default:
      return 0;
    
  }
}

//builds html page
function renderHtml(reactPage, preloadedState){
  console.log('renderHtml');
  console.log(preloadedState);
  return(`<!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
        <title>Steam Companion</title>
        <style id="jss-server-side">${reactPage.css}</style>
        <script src='/bundle.js' defer></script>
        <script>
          window.__PRELOADED_STATE__=${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
      </head>
      <body>
        <div id='app'>${reactPage.markup}</div>
      </body>
    </html>
  `);
}
//#2B3856
