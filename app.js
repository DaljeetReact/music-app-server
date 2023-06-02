const express = require('express')
const app = express();
const cross = require('cors');

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(4000,()=>console.log('listening to 3000'));
