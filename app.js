import express from 'express';
import  cross from 'cors';
import  {userRoutes,AlbumsRouter,ArtistRouter,SongRouter}  from './routes/index.js';
import {connectToMongoDb} from './config/db.js'

const app = express();
// Configurations
app.use(cross({origin:'*'})); // enable cross origin from 
app.use(express.json()); // enable accept json body


// Routes
app.get('/', function (req, res) {
  res.send('Welcome to music server');
});

app.get('/api', function (req, res) {
  const host = req.headers.host;
  res.json({
    users:`http://${host}/api/users/`,
    songs:`http://${host}/api/songs/`,
    albums:`http://${host}/api/albums/`,
    artists:`http://${host}/api/artists/`
  })
});

//Authentication Routes
app.use('/api/users/',userRoutes);

//Songs Routes
app.use('/api/songs/',SongRouter);

//Artist Routes
app.use('/api/artists/',ArtistRouter);

//Albums Routes
app.use('/api/albums/',AlbumsRouter);



//Listen to port 4000
app.listen(4000,()=>{
  console.log('the server is up')
  connectToMongoDb();
});