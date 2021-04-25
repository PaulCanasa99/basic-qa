import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Typography } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/es';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

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
    display: 'flex',
  },
}));

const Respuesta = ({ respuesta }) => {
  const classes = useStyles();
  moment.locale('es');

  return (
    <>
      <div className={classes.respuestaHeader}>
        <Typography variant="h5" style={{ fontWeight: 'bold' }}>
          {respuesta.nombre_autor}
        </Typography>
        <Typography variant="h5" style={{ margin: '0 5px' }}>
          {'realizó un comentario el'}
        </Typography>
        <Typography variant="h5" style={{ fontWeight: 'bold' }}>
          {moment(respuesta.fecha).format('D MMMM YYYY')}
        </Typography>
      </div>
      <div className={classes.respuestaContainer}>
        <div
          dangerouslySetInnerHTML={{
            __html: respuesta.respuesta,
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <IconButton>
            <ThumbUpIcon />
          </IconButton>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>
            {respuesta.num_positivos}
          </Typography>
          <IconButton>
            <ThumbDownIcon />
          </IconButton>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>
            {respuesta.num_negativos}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Respuesta;
