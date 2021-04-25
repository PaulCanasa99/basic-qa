import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pregunta from '../components/Pregunta';
import Respuesta from '../components/Respuesta';
import { Button, Divider, Typography } from '@material-ui/core';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReplyIcon from '@material-ui/icons/Reply';
import { useParams } from 'react-router';
import axios from 'axios';
import Context from '../context/Context';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '100px 0px',
    width: '80%',
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
    margin: 'auto',
  },
}));
const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const PreguntasYRespuestas = (props) => {
  const classes = useStyles();
  const { idPregunta } = useParams();
  const [pregunta, setPregunta] = useState();
  const [respuesta, setRespuesta] = useState();
  const [respuestas, setRespuestas] = useState();
  const { usuario } = useContext(Context);
  const [open, setOpen] = useState(false);

  const handleResponder = () => {
    if (usuario) {
      const respuestaObj = {
        idPregunta: pregunta.id_pregunta,
        idAutor: usuario.id,
        nombreAutor: usuario.nombre,
        respuesta: respuesta,
      };
      axios
        .post(`${process.env.REACT_APP_API_URL}/api/respuestas/crear`, respuestaObj)
        .then((r) => {
          axios.get(`${process.env.REACT_APP_API_URL}/api/respuestas/${idPregunta}`).then((response) => {
            setRespuestas(response.data);
          });
        })
        .catch((e) => {
          console.log(e);
        });
    } else setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/pregunta/detalle/${idPregunta}`).then((response) => {
      setPregunta(response.data[0]);
    });
  }, [idPregunta]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/respuestas/${idPregunta}`).then((response) => {
      setRespuestas(response.data);
    });
  }, [idPregunta]);

  return (
    <div className={classes.container}>
      <Typography variant="h4" color="secondary">
        Pregunta
      </Typography>
      <Pregunta pregunta={pregunta} />
      <Divider style={{ margin: '20px 0', height: '2px' }} />
      <Typography variant="h4" color="secondary">
        Respuestas
      </Typography>
      {respuestas && respuestas.length ? (
        respuestas.map((respuesta, index) => <Respuesta respuesta={respuesta} key={index} />)
      ) : (
        <Typography style={{ fontSize: '20px', margin: '10px 0' }}>
          Aún no hay respuestas, pero puedes agregar una abajo.
        </Typography>
      )}
      <Divider style={{ margin: '20px 0', height: '2px' }} />
      <Typography variant="h4" color="secondary" style={{ marginBottom: '30px' }}>
        Tu respuesta
      </Typography>
      <CKEditor
        editor={ClassicEditor}
        data={respuesta}
        onChange={(event, editor) => {
          setRespuesta(editor.getData());
        }}
      />
      <Button
        style={{ float: 'right', marginTop: '20px' }}
        variant="contained"
        color="secondary"
        startIcon={<ReplyIcon />}
        onClick={handleResponder}
      >
        Responder
      </Button>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="error">Debes iniciar sesión para publicar respuestas</Alert>
      </Snackbar>
    </div>
  );
};

export default PreguntasYRespuestas;
