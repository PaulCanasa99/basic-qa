import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

let data = [
  { titulo: 'Pregunta1', descripcion: 'Descripción1', autor: 'Paul Canasa' },
  { titulo: 'Pregunta2', descripcion: 'Descripción2', autor: 'Paul Canasa' },
  { titulo: 'Pregunta2', descripcion: 'Descripción3', autor: 'Paul Canasa' },
];
const useStyles = makeStyles((theme) => ({
  preguntaContainer: {
    padding: '15px',
  },
  preguntasHeader: {
    borderRadius: '10px 10px 0 0',
    padding: '15px',
    backgroundColor: '#353535',
    marginTop: '30px',
  },
}));

const ListaPreguntas = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.preguntasHeader}>
        <Typography variant="h5">Preguntas recientes</Typography>
      </div>
      {data.map((pregunta, index, array) => (
        <div
          style={{
            backgroundColor: index % 2 ? '#D9D9D9' : '#FFF',
            borderRadius: index === array.length - 1 ? '0px 0px 10px 10px' : '0px',
          }}
          className={classes.preguntaContainer}
        >
          <Typography variant="body1">{pregunta.titulo}</Typography>
          <Typography variant="body2" align="right">
            {pregunta.autor}
          </Typography>
        </div>
      ))}
    </>
  );
};
export default ListaPreguntas;
