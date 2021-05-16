import React from 'react';
import ReactDOM from 'react-dom';
import 'scss/index.scss';
import App from 'App';
import { Router } from 'react-router';
import { pathUtil } from 'custom_util';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from 'data';
import { Provider } from 'mobx-react';
import * as stores from 'stores';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider {...stores}>
    <ThemeProvider theme={theme}>
      <Router history={pathUtil.history}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
