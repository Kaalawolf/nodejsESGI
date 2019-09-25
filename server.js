const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/hello', function (req, res) {
  if(req.query.name==null)
  	res.send('Quel est votre nom ?')
  else
  	res.send('Bonjour, ' + req.query.name + " !")
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})