import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '100px 0px',
    width: '90%',
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
  },
  registroBody: {
    padding: '15px 45px',
    backgroundColor: 'white',
    borderRadius: '0 0 10px 10px',
  },
  registroHeader: {
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
const Registro = () => {
  const history = useHistory();
  const classes = useStyles();
  const [nombre, setNombre] = useState();
  const [password, setPassword] = useState();
  const [correo, setCorreo] = useState();
  const [open, setOpen] = useState(false);

  const handleRegistro = () => {
    const usuarioObj = { nombre: nombre, password: password, correo: correo };
    axios.get(`${process.env.REACT_APP_API_URL}/api/usuarios/${nombre}/existe`).then((r) => {
      console.log(r.data);
      if (!r.data) {
        axios.get(`${process.env.REACT_APP_API_URL}/api/usuarios/${correo}/existe`).then((r) => {
          if (!r.data) {
            axios
              .post(`${process.env.REACT_APP_API_URL}/api/usuarios/crear`, usuarioObj)
              .then((r) => console.log(r))
              .catch((e) => {
                console.log(e);
              });
            history.push('/');
          } else {
            setOpen(true);
          }
        });
      } else {
        setOpen(true);
      }
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
      <div className={classes.registroHeader}>
        <Typography variant="h5" align="center">
          Crea una cuenta en Basic QA
        </Typography>
      </div>
      <div className={classes.registroBody}>
        <Typography style={{ fontWeight: 'bold' }}>Nombre de usuario:</Typography>
        <TextField
          className={classes.textField}
          variant="outlined"
          onChange={(event) => setNombre(event.target.value)}
        />
        <Typography style={{ fontWeight: 'bold' }}>Correo electrónico:</Typography>
        <TextField
          className={classes.textField}
          variant="outlined"
          onChange={(event) => setCorreo(event.target.value)}
        />
        <Typography style={{ fontWeight: 'bold' }}>Contraseña:</Typography>
        <TextField
          className={classes.textField}
          variant="outlined"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button onClick={handleRegistro} fullWidth variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Crear cuenta
        </Button>
        <div className={classes.nuevo}>
          <Typography>{'¿Ya tienes cuenta en Basic QA? '}</Typography>
          <Typography style={{ fontWeight: 'bold' }}>Ingresa aquí</Typography>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="error">El usuario o correo ya han sido utilizado. Ingrese otras credenciales por favor.</Alert>
      </Snackbar>
    </div>
  );
};

export default Registro;
