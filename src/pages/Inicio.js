import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import ListaPreguntas from '../components/ListaPreguntas';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '100px 0px',
    width: '80%',
    margin: 'auto',
  },
}));

// let data = [
//   { titulo: 'Pregunta1', descripcion: 'Descripción' },
//   { titulo: 'Pregunta2', descripcion: 'Descripción' },
//   { titulo: 'Pregunta2', descripcion: 'Descripción' },
// ];
const Inicio = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4" color="secondary">
            Preguntas
          </Typography>
        </Grid>
        <Grid>
          <Button variant="contained" className={classes.test} color="secondary" startIcon={<AddIcon />}>
            Nueva pregunta
          </Button>
        </Grid>
      </Grid>
      <ListaPreguntas />
    </div>
  );
};

export default Inicio;
