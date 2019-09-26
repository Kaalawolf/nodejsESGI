// console.log('Hello World');

const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json()); // accept json data in POST requests

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/hello', function (req, res) {
  console.log('params', req.query.nom)
  if (req.query.nom) {
    res.send(`Bonjour, ${req.query.nom} !`)
  } else {
    res.send('Quel est votre nom ?')
  }
})

app.post('/chat', function (req, res) {
  const msg = req.body.msg;
  console.log('chat message:', msg);
  if (msg === 'ville') {
    res.send('Nous sommes à Paris');
  } else if (msg === 'météo') {
    res.send('Il fait beau');
  } else {
    res.send(`TODO`);
  }
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})

/*const express = require('express');
const myApp = express();

myApp.get('/hi', function (req, res) {
  if(req.query.country)
  	res.send(`Hello, ${req.query.country}!`)
  else
  	res.send('Which country?')
})

myApp.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})*/