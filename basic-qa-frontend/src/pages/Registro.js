import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '100px 0px',
    width: '40%',
    margin: 'auto',
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

const Registro = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.registroHeader}>
        <Typography variant="h5" align="center">
          Crea una cuenta en Basic QA
        </Typography>
      </div>
      <div className={classes.registroBody}>
        <Typography style={{ fontWeight: 'bold' }}>Nombre de usuario:</Typography>
        <TextField className={classes.textField} variant="outlined" />
        <Typography style={{ fontWeight: 'bold' }}>Correo electrónico:</Typography>
        <TextField className={classes.textField} variant="outlined" />
        <Typography style={{ fontWeight: 'bold' }}>Contraseña:</Typography>
        <TextField className={classes.textField} variant="outlined" />
        <Button fullWidth variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Crear cuenta
        </Button>
        <div className={classes.nuevo}>
          <Typography>{'¿Ya tienes cuenta en Basic QA? '}</Typography>
          <Typography style={{ fontWeight: 'bold' }}>Ingresa aquí</Typography>
        </div>
      </div>
    </div>
  );
};

export default Registro;
