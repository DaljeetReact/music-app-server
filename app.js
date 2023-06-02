import express from 'express';
import  cross from 'cors';
import  userRoutes  from './routes/auth.js';
import {connectToMongoDb} from './config/db.js'

const app = express();

app.get('/', function (req, res) {
  res.send('Welcome to music server');
});

//user authentication Routes
app.use('/api/users/',userRoutes);

app.listen(4000,()=>{
  console.log('the server is up')
  connectToMongoDb();
});