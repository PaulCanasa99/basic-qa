import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pregunta from '../components/Pregunta';
import Respuesta from '../components/Respuesta';
import { Divider, Typography } from '@material-ui/core';
let data = { titulo: 'Pregunta1', descripcion: 'Descripción1', autor: 'Paul Canasa' };
let respuestas = [
  { autor: 'Juan Perez', respuesta: 'Respuesta de preuba' },
  { autor: 'Juan Perez', respuesta: 'Respuesta de preuba' },
  { autor: 'Juan Perez', respuesta: 'Respuesta de preuba' },
];
const useStyles = makeStyles((theme) => ({
  container: {
    padding: '100px 0px',
    width: '80%',
    margin: 'auto',
  },
}));

const PreguntasYRespuestas = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h4" color="secondary">
        Pregunta
      </Typography>
      <Pregunta pregunta={data} />
      <Divider style={{ margin: '20px 0', height: '2px' }} />
      <Typography variant="h4" color="secondary">
        Respuestas
      </Typography>
      {respuestas.map((respuesta) => (
        <Respuesta respuesta={respuesta} />
      ))}
      <Divider style={{ margin: '20px 0', height: '2px' }} />
      <Typography variant="h4" color="secondary">
        Tu respuesta
      </Typography>
    </div>
  );
};

export default PreguntasYRespuestas;
