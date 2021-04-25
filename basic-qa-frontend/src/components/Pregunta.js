import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/es';

const useStyles = makeStyles((theme) => ({
  preguntaContainer: {
    padding: '5px 15px 5px 15px',
    backgroundColor: 'white',
    borderRadius: '0 0 10px 10px',
  },
  preguntaHeader: {
    borderRadius: '10px 10px 0 0',
    padding: '15px',
    backgroundColor: theme.palette.secondary.main,
    marginTop: '30px',
  },
}));

const Pregunta = ({ pregunta }) => {
  const classes = useStyles();
  moment.locale('es');
  return pregunta ? (
    <>
      <div className={classes.preguntaHeader}>
        <Typography variant="h5">{pregunta.titulo}</Typography>
      </div>
      <div className={classes.preguntaContainer}>
        <div
          dangerouslySetInnerHTML={{
            __html: pregunta.detalle,
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
          <Typography variant="body2" style={{ margin: '0 5px' }}>
            {`${moment(pregunta.fecha).format('D MMMM YYYY')} por `}
          </Typography>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>
            {pregunta.nombre_autor}
          </Typography>
        </div>
      </div>
    </>
  ) : null;
};

export default Pregunta;
