import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pregunta from '../components/Pregunta';
import Respuesta from '../components/Respuesta';
import { Button, Divider, Typography } from '@material-ui/core';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReplyIcon from '@material-ui/icons/Reply';
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
      <Typography variant="h4" color="secondary" style={{ marginBottom: '20px' }}>
        Tu respuesta
      </Typography>
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
      <Button
        style={{ float: 'right', marginTop: '20px' }}
        variant="contained"
        color="secondary"
        startIcon={<ReplyIcon />}
      >
        Responder
      </Button>
    </div>
  );
};

export default PreguntasYRespuestas;
