import express from 'express';
import data from './data/contentfulData.js';
// const express = require('express');

const app = express();
const PORT = 8000;

app
  .route('/')
  .get((req, res) => res.send('Hello World!'))
  .post((req, res) => res.send('We create a ressource'))
  .put((req, res) => res.send('We update a ressource'))
  .delete((req, res) => res.send('We delete a ressource'));

// RESPONSE TYPES
app.get('/data', (req, res) => {
  res.json(data);
});

app.get('/html', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // nur mit CommonJS
});

app.get('/redirect', (req, res) => res.redirect('/data'));
app.get('/download', (req, res) => res.download('server.js'));

// PARAMS & QUERY-STRINGS
app.get('/users/:id', (req, res) => {
  console.log(req.params.id); // holt den Route-Parameter
  console.log(req.query.sort); // holt den Query-String
  res.send('Check your server console!');
});

// VIEW ENGINES
app.set('view engine', 'ejs');

app.get('/pug', (req, res) => res.render('index'));
app.get('/ejs', (req, res) => res.render('index'));

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
