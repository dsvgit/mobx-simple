import React from 'react';
import { Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import { Provider } from 'mobx-react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import ErrorBoundary from 'src/app/components/ErrorBoundary';
import history from 'src/app/history';
import homeStore from 'src/app/modules/stores/homeStore';

import theme from './styles/theme';
import './styles/common.scss';
import './styles/normalize.scss';

const stores = {
  homeStore
};

const muiTheme = createMuiTheme(theme);

export default props => {
  return (
    <Provider {...stores}>
      <Router history={history}>
        <MuiThemeProvider theme={muiTheme}>
          <ErrorBoundary>
            <AppRouter />
          </ErrorBoundary>
        </MuiThemeProvider>
      </Router>
    </Provider>
  );
};
