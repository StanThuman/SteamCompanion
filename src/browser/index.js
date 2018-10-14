
import React, { Component } from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createGenerateClassName
} from '@material-ui/core/styles';
import App from '../components/App';
import { steamApp } from '../redux/steam-app'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mainTheme } from '../styles/Styles';
import CssBaseline from '@material-ui/core/CssBaseline';


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



const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = createStore( steamApp, preloadedState);

console.log(preloadedState);

// tells react that the markup has been handled by the server and not to redo the work
// done by the server already

const generateClassName = createGenerateClassName();


hydrate(

  <Provider  store={ store }>
    <BrowserRouter>
      <JssProvider generateClassName={ generateClassName }>
        <MuiThemeProvider theme= { mainTheme }>
              <React.Fragment>
                <CssBaseline />
                <Main  />
              </React.Fragment>
        </MuiThemeProvider>
      </JssProvider>
    </BrowserRouter>
  </Provider>,
document.getElementById('app')
)
