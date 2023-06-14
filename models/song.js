import mongoose from 'mongoose';
const SongSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true
  }, 
  imgUrl: {
    type:String,
    required:true
  },
  songUrl: {
    type:String,
    required:true
  },
  album: {
    type:String
  },
  artist: {
    type:String,
    required:true
  },
  lan:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true
  }
},{timestamps:true});

export default  mongoose.model('song', SongSchema);
