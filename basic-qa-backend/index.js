const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql');
const PORT = process.env.PORT || 8000;
const app = express();
const moment = require('moment');
const cors = require('cors');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

const connection = mysql.createConnection({
  host: 'basic-qa.czr362ogxzgj.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: '!$KTTSVXn$wf',
  database: 'basic_qa',
  multipleStatements: true,
});

app.get('/api/usuarios', (req, res) => {
  const sql = 'SELECT * FROM usuarios';
  connection.query(sql, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get('/', (req, res) => {
  res.send(moment());
});

app.post('/api/usuarios/crear', (req, res) => {
  const sql = 'INSERT INTO usuarios SET ?';

  const usuarioObj = {
    nombre: req.body.nombre,
    password: req.body.password,
    correo: req.body.correo,
  };

  connection.query(sql, usuarioObj, (error) => {
    if (error) throw error;
    res.send('Usuario creado');
  });
});

app.get('/api/preguntas', (req, res) => {
  const sql = 'SELECT * FROM preguntas';
  connection.query(sql, (error, results) => {
    if (error) throw error;
    res.status(200).json(results);
  });
});

app.post('/api/preguntas/crear', (req, res) => {
  const sql = 'INSERT INTO preguntas SET ?';

  const preguntaObj = {
    id_autor: req.body.idAutor,
    titulo: req.body.titulo,
    detalle: req.body.detalle,
    estado: 1,
    resuelta: 0,
    nombre_autor: req.body.nombreAutor,
    fecha: new Date(),
  };
  connection.query(sql, preguntaObj, (error) => {
    if (error) throw error;
    res.send('Pregunta creada');
  });
});

app.get('/api/pregunta/detalle/:id', (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM preguntas where id_pregunta = ${id} `;
  connection.query(sql, (error, results) => {
    if (error) throw error;
    res.status(200).json(results);
  });
});

app.get('/api/respuestas/:id', (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM respuestas where id_pregunta = ${id} `;
  connection.query(sql, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.post('/api/respuestas/crear', (req, res) => {
  const sql = 'INSERT INTO respuestas SET ?';

  const respuestaObj = {
    id_pregunta: req.body.idPregunta,
    id_autor: req.body.idAutor,
    nombre_autor: req.body.nombreAutor,
    respuesta: req.body.respuesta,
    fecha: new Date(),
    estado: 1,
  };

  connection.query(sql, respuestaObj, (error) => {
    if (error) throw error;
    res.send('Respuesta creada');
  });
});

app.post('/api/respuestas/calificar', (req, res) => {
  const sql = 'INSERT INTO respuesta_usuario SET ?';

  const calificacionObj = {
    id_respuesta: req.body.idRespuesta,
    id_usuario: req.body.idUsuario,
    calificacion: req.body.calificacion,
  };

  connection.query(sql, calificacionObj, (error) => {
    if (error) throw error;
    res.send('Respuesta creada');
  });
});

app.get('/api/usuarios/:usuario/verificar', (req, res) => {
  const { usuario } = req.params;
  const sql = `SELECT id_usuario FROM usuarios WHERE nombre = '${usuario}' OR correo = '${usuario}'`;

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results[0]) res.status(200).json({ resultado: results[0].id_usuario });
    else res.status(400).json(null);
  });
});

app.get('/api/usuarios/:usuario/existe', (req, res) => {
  const { usuario } = req.params;
  const sql = `SELECT id_usuario FROM usuarios WHERE nombre = '${usuario}' OR correo = '${usuario}'`;

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results[0]) res.status(200).send(true);
    else res.status(200).send(false);
  });
});

app.get('/api/login/:id/:password', (req, res) => {
  const { id, password } = req.params;
  const sql = `SELECT * FROM usuarios WHERE id_usuario = '${id}' AND password = '${password}'`;
  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results[0])
      res.status(200).json({ id: results[0].id_usuario, nombre: results[0].nombre, correo: results[0].correo });
    else res.status(400).json(null);
  });
});

connection.connect((error) => {
  if (error) throw error;
  console.log('Database server running!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
