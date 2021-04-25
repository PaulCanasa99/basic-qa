import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  respuestaContainer: {
    padding: '15px',
    backgroundColor: 'white',
    borderRadius: '0 0 10px 10px',
  },
  respuestaHeader: {
    borderRadius: '10px 10px 0 0',
    padding: '15px',
    backgroundColor: theme.palette.secondary.main,
    marginTop: '30px',
  },
}));

const Respuesta = ({ respuesta }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.respuestaHeader}>
        <Typography variant="h5">{respuesta.autor}</Typography>
      </div>
      <div className={classes.respuestaContainer}>
        <Typography variant="body1">{respuesta.respuesta}</Typography>
        <Typography variant="body2" align="right">
          10 respuestas
        </Typography>
      </div>
    </>
  );
};

export default Respuesta;
