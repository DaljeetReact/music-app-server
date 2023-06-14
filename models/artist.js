import mongoose from 'mongoose';
const artistSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true
  }, 
  imgUrl: {
    type:String,
    required:true
  },
  instagram: {
    type:String
  },
  twitter: {
    type:String
  },
  facebook: {
    type:String
  },
},{timestamps:true});

export default  mongoose.model('artists', artistSchema);
