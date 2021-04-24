import React from 'react';
import Inicio from './pages/Inicio';
import AppBar from '@material-ui/core/AppBar';
import { createMuiTheme, MuiThemeProvider, Typography } from '@material-ui/core';

const THEME = createMuiTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif;",
    color: 'red',
    h4: {
      fontSize: 36,
      color: '#FFFFFF',
    },
    h5: {
      fontSize: 24,
      color: '#FFFFFF',
    },
    body1: {
      fontSize: 18,
      color: '#353535',
    },
    body2: {
      fontSize: 16,
    },
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#284B63',
    },
    secondary: {
      main: '#353535',
    },
  },
});
const App = () => {
  return (
    <MuiThemeProvider theme={THEME}>
      <AppBar>
        <Typography variant="h4">Basic QA</Typography>
      </AppBar>
      <Inicio />
    </MuiThemeProvider>
  );
};

export default App;
