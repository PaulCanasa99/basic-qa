import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import ListaPreguntas from '../components/ListaPreguntas';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router';
import axios from 'axios';
import Context from '../context/Context';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '100px 0px',
    width: '80%',
    margin: 'auto',
  },
}));
const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Inicio = () => {
  const history = useHistory();
  const classes = useStyles();
  const [preguntas, setPreguntas] = useState();
  const [open, setOpen] = useState(false);
  const { usuario } = useContext(Context);

  const nuevaPregunta = () => {
    usuario ? history.push('crearPregunta') : setOpen(true);
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/preguntas`).then((response) => {
      console.log(response.data);
      setPreguntas(response.data);
    });
  }, []);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.container}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4" color="secondary">
            Preguntas
          </Typography>
        </Grid>
        <Grid>
          <Button variant="contained" color="secondary" startIcon={<AddIcon />} onClick={nuevaPregunta}>
            Nueva pregunta
          </Button>
        </Grid>
      </Grid>
      <ListaPreguntas preguntas={preguntas} />
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="error">Debes estar registrado para realizar preguntas</Alert>
      </Snackbar>
    </div>
  );
};

export default Inicio;
