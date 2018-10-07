
import React, { Component } from 'react';
import { hydrate } from 'react-dom';

import App from '../components/App';
import { BrowserRouter } from 'react-router-dom';
import JssProvider from 'react-jss/lib/JssProvider';


import { steamApp } from '../redux/steam-app'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//material ui imports
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName
} from '@material-ui/core/styles';



class Main extends Component {
  componentDidMount() {

    const jssStyles = document.getElementById('jss-server-side');
    if(jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  render(){
    return <App />
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#c1d5e0'
      //main: '#424242'
    },
    secondary: {
      //light: '#c3fdff',
      main: '#263238'
      //main: '#82b1ff'
    }
  }
});

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = createStore( steamApp, preloadedState);

console.log(preloadedState);

// tells react that the markup has been handled by the server and not to redo the work
// done by the server already

const generateClassName = createGenerateClassName();


hydrate(

    <JssProvider generateClassName={ generateClassName }>
      <MuiThemeProvider theme= { theme }>
        <Provider  store={ store }>
          <BrowserRouter>
            <Main  />
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    </JssProvider>,
  document.getElementById('app')
)
