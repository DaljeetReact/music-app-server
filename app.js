import express from 'express';
import * as dotenv from 'dotenv'
import { MongoClient, ServerApiVersion } from 'mongodb';
import  cross from 'cors';
import  userRoutes  from './routes/auth.js';

dotenv.config({ path: './.env.local' }); //set the env file path to read the values 

const app = express();

app.get('/', function (req, res) {
  res.send('Welcome to music server');
});
//Routes files
//user authentication Routes
app.use('/api/users/',userRoutes);


//url encode string 
const username = encodeURIComponent(process.env.APP_MONGODB_USERNAME);
const password = encodeURIComponent(process.env.APP_MONGODB_PASSWORD);

// Connection URL
const url = `mongodb+srv://${username}:${password}@cluster0.xdroalq.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}


app.listen(4000,()=>{
  run().catch(console.dir);
});
//node js mogodb connection ?