
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import {_dbName,mongodbSetting} from '../consts.js'

dotenv.config({ path: './.env.local' }); //set the env file path to read the values 
//url encode string 
const username = encodeURIComponent(process.env.APP_MONGODB_USERNAME);
const password = encodeURIComponent(process.env.APP_MONGODB_PASSWORD);

// Connection URL
const url = `mongodb+srv://${username}:${password}@cluster0.xdroalq.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version


async function connectToMongoDb() {
  return await mongoose.connect(url).then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
}

export { connectToMongoDb };
