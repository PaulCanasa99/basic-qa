import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Context from '../context/Context';

const Header = () => {
  const { usuario } = useContext(Context);
  return (
    <AppBar style={{ padding: '5px 0' }}>
      <Toolbar style={{ width: '80%', margin: 'auto' }}>
        <Typography variant="h4" style={{ flexGrow: 9 }}>
          <Link to="/" style={{ color: '#FFF', textDecoration: 'none' }}>
            Basic QA
          </Link>
        </Typography>
        {usuario ? (
          <Typography variant="h5">{`Bienvenido ${usuario.nombre}`}</Typography>
        ) : (
          <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
            <Typography variant="h5" style={{ margin: '0 10px' }}>
              <Link to="/login" style={{ color: '#FFF' }}>
                Ingresar
              </Link>
            </Typography>
            <Typography variant="h5" style={{ margin: '0 10px' }}>
              <Link to="/registro" style={{ color: '#FFF' }}>
                Registrarse
              </Link>
            </Typography>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
