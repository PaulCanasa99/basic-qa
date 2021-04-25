import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import TextField from '@material-ui/core/TextField';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
    padding: '15px',
    backgroundColor: theme.palette.secondary.main,
    marginTop: '30px',
  },
  textField: {
    margin: '10px 0',
    width: '100%',
    borderRadius: '10px',
    backgroundColor: '#FFF',
  },
}));

const CrearPregunta = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h4" color="secondary">
        Crear pregunta
      </Typography>
      <div className={classes.preguntaHeader}>
        <Typography variant="h5">Título de la pregunta</Typography>
        <TextField
          placeholder="Por ejemplo: ¿Cómo inicio la creación de un proyecto en React?"
          className={classes.textField}
          variant="outlined"
        />
      </div>
      <div className={classes.preguntaContainer}>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <Button
        style={{ float: 'right', marginTop: '20px' }}
        variant="contained"
        color="secondary"
        startIcon={<CheckIcon />}
      >
        Crear pregunta
      </Button>
    </div>
  );
};

export default CrearPregunta;
