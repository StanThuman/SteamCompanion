"use strict";
import qs from 'qs';
import "@babel/polyfill";
import express from 'express';
//react imports
import React from 'react';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
//material ui alreadyImportedModules
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName
} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
//redux imports
import { createStore  } from 'redux';
import{ Provider } from 'react-redux';

import App from '../App';
import { steamApp } from '../redux/steam-app'

import { mainTheme } from '../styles/Styles'

const app = express();
app.use(express.static('public')); //server public files to frontend
//app.use('/img', express.static('src'));

//callback for server requests
app.get('*', (req,res) => {
  let initialState = { routeNumber: 0};
  switch(req.originalUrl){
    case '/about':
      initialState.routeNumber = 3;
    break;
    default:
      initialState.routeNumber = 0;
    break;
  }

//Your Steam Web API Key
//Key: 26F6DB692027CC7884B8A067D190F6DF
//Domain Name: localhost
  // const params = qs.parse(req.query);



  const store = createStore(steamApp, initialState);
  var reactPage = convertReactToString(req, store);
  console.log(req.url);
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
      <JssProvider registry={ sheetsRegistry } generateClassName={ generateClassName }>
        <MuiThemeProvider theme={ mainTheme } sheetsManager={ sheetsManager }>
          <StaticRouter location={ req.url } context={{}}>
            <App  />
          </StaticRouter>
        </MuiThemeProvider>
      </JssProvider>
    </Provider>
  );

  return({markup, css});
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
      <body style="margin:0;background-color:#263238;">
        <div id='app'>${reactPage.markup}</div>
      </body>
    </html>
    `);
}
//#2B3856
