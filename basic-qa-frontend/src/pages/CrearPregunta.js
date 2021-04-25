import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import TextField from '@material-ui/core/TextField';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Context from '../context/Context';
import axios from 'axios';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '100px 0px',
    width: '80%',
    margin: 'auto',
  },
  preguntaContainer: {
    padding: '15px',
    backgroundColor: 'white',
    borderRadius: '0 0 10px 10px',
  },
  preguntaHeader: {
    borderRadius: '10px 10px 0 0',
    padding: '20px',
    backgroundColor: theme.palette.secondary.main,
    marginTop: '30px',
  },
  textField: {
    marginTop: '15px',
    width: '100%',
    borderRadius: '10px',
    backgroundColor: '#FFF',
  },
}));

const CrearPregunta = () => {
  const classes = useStyles();
  const { usuario } = useContext(Context);
  const [titulo, setTitulo] = useState();
  const [detalle, setDetalle] = useState();
  const history = useHistory();

  const handleCrear = () => {
    const preguntaObj = { idAutor: usuario.id, titulo: titulo, detalle: detalle, nombreAutor: usuario.nombre };
    console.log(preguntaObj);
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/preguntas/crear`, preguntaObj)
      .then((r) => history.push('/'))
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className={classes.container}>
      <Typography variant="h4" color="secondary">
        Crear pregunta
      </Typography>
      <div className={classes.preguntaHeader}>
        <Typography variant="h5">Título</Typography>
        <TextField
          placeholder="Por ejemplo: ¿Cómo inicio la creación de un proyecto en React?"
          className={classes.textField}
          variant="outlined"
          multiline
          onChange={(event) => setTitulo(event.target.value)}
        />
      </div>
      <div className={classes.preguntaContainer}>
        <CKEditor
          editor={ClassicEditor}
          data={detalle}
          onChange={(event, editor) => {
            setDetalle(editor.getData());
          }}
        />
      </div>
      <Button
        style={{ float: 'right', marginTop: '20px' }}
        variant="contained"
        color="secondary"
        startIcon={<CheckIcon />}
        onClick={handleCrear}
      >
        Crear pregunta
      </Button>
    </div>
  );
};

export default CrearPregunta;
