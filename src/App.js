import React from 'react';
import Inicio from './pages/Inicio';
import AppBar from '@material-ui/core/AppBar';
import { createMuiTheme, MuiThemeProvider, Typography } from '@material-ui/core';
import CrearPregunta from './pages/CrearPregunta';
import PreguntaYRespuestas from './pages/PreguntaYRespuestas';
import Login from './pages/Login';
import Registro from './pages/Registro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
      fontSize: 18,
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
      <AppBar style={{ padding: '15px' }}>
        <Typography variant="h4">Basic QA</Typography>
      </AppBar>
      <Router>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/pregunta/:idPregunta" component={PreguntaYRespuestas} />
          <Route path="/crearPregunta" component={CrearPregunta} />
          <Route path="/login" component={Login} />
          <Route path="/registro" component={Registro} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
