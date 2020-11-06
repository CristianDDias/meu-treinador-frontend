import React from 'react';
import { ReactQueryConfig, ReactQueryConfigProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from '../theme';

const queryConfig: ReactQueryConfig = {
  queries: {
    // refetchInterval: 30 * 1000,
    // refetchIntervalInBackground: true,
    refetchOnWindowFocus: false,
  },
};

export const AppProvider: React.FC = ({ children }) => {
  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </BrowserRouter>
    </ReactQueryConfigProvider>
  );
};
