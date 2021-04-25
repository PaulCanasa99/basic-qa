import React, { useState } from 'react';
import Inicio from './pages/Inicio';
import THEME from './utils/Theme';
import { MuiThemeProvider } from '@material-ui/core';
import CrearPregunta from './pages/CrearPregunta';
import PreguntaYRespuestas from './pages/PreguntaYRespuestas';
import Login from './pages/Login';
import Registro from './pages/Registro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Context from './context/Context';
import Header from './components/Header';

const App = () => {
  const [usuario, setUsuario] = useState();

  return (
    <Context.Provider value={{ usuario, setUsuario }}>
      <MuiThemeProvider theme={THEME}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Inicio} />
            <Route path="/pregunta/:idPregunta" component={PreguntaYRespuestas} />
            <Route path="/crearPregunta" component={CrearPregunta} />
            <Route path="/login" component={Login} />
            <Route path="/registro" component={Registro} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </Context.Provider>
  );
};

export default App;
