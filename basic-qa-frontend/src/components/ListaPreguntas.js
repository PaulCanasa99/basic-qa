import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import 'moment/locale/es';
import { useHistory } from 'react-router';

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

const ListaPreguntas = ({ preguntas }) => {
  const classes = useStyles();
  moment.locale('es');
  const history = useHistory();

  return (
    <>
      <div className={classes.preguntasHeader}>
        <Typography variant="h5">Preguntas recientes</Typography>
      </div>
      {preguntas?.map((pregunta, index, array) => (
        <div
          onClick={() => history.push(`/pregunta/${pregunta.id_pregunta}`)}
          key={index}
          style={{
            backgroundColor: index % 2 ? '#D9D9D9' : '#FFF',
            borderRadius: index === array.length - 1 ? '0px 0px 10px 10px' : '0px',
            cursor: 'pointer',
          }}
          className={classes.preguntaContainer}
        >
          <Typography variant="body1">{pregunta.titulo}</Typography>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
            <Typography variant="body2" style={{ margin: '0 5px' }}>
              {`${moment(pregunta.fecha).format('D MMMM YYYY')} por `}
            </Typography>
            <Typography variant="body2" style={{ fontWeight: 'bold' }}>
              {pregunta.nombre_autor}
            </Typography>
          </div>
        </div>
      ))}
    </>
  );
};
export default ListaPreguntas;
