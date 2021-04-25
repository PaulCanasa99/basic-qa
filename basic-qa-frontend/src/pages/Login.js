import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router';
import Context from '../context/Context';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '100px 0px',
    margin: 'auto',
    width: '90%',

    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
  },
  loginBody: {
    padding: '15px 45px',
    backgroundColor: 'white',
    borderRadius: '0 0 10px 10px',
  },
  loginHeader: {
    borderRadius: '10px 10px 0 0',
    padding: '15px',
    backgroundColor: theme.palette.secondary.main,
    marginTop: '20px',
  },
  textField: {
    margin: '15px 0',
    width: '100%',
    backgroundColor: '#E5E5E5',
  },
  nuevo: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0px',
  },
}));
const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};
const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [open, setOpen] = useState(false);

  const { setUsuario } = useContext(Context);
  const classes = useStyles();
  const handleLogin = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/usuarios/${username}/verificar`)
      .then((r) => {
        axios
          .get(`${process.env.REACT_APP_API_URL}/api/login/${r.data.resultado}/${password}`)
          .then((r) => {
            setUsuario(r.data);
            history.push('/');
          })
          .catch((e) => {
            console.log(e);
            setOpen(true);
          });
      })
      .catch((e) => {
        console.log(e);
        setOpen(true);
      });
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.loginHeader}>
        <Typography variant="h5" align="center">
          Inicia sesión en Basic QA
        </Typography>
      </div>
      <div className={classes.loginBody}>
        <Typography style={{ fontWeight: 'bold' }}>Usuario o correo electrónico:</Typography>
        <TextField
          className={classes.textField}
          variant="outlined"
          onChange={(event) => setUsername(event.target.value)}
        />
        <Typography style={{ fontWeight: 'bold' }} type="password">
          Contraseña:
        </Typography>
        <TextField
          className={classes.textField}
          variant="outlined"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button fullWidth variant="contained" color="primary" style={{ marginTop: '20px' }} onClick={handleLogin}>
          Ingresar
        </Button>
        <div className={classes.nuevo}>
          <Typography>{'¿Nuevo en Basic QA? '}</Typography>
          <Typography style={{ fontWeight: 'bold' }}>Regístrate</Typography>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="error">Credenciales incorrectas.</Alert>
      </Snackbar>
    </div>
  );
};

export default Login;
