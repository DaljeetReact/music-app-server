import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true
  }, 
  email: {
    type:String,
    required:true
  },
  imgUrl: {
    type:String,
    required:true
  },
  user_id: {
    type:String,
    required:true
  },
  email_verified: {
    type:Boolean,
    required:true
  },
  role: {
    type:String,
    required:true
  },
  auth_time: {
    type:String,
    required:true
  },
},{timestamps:true});

export default  mongoose.model('users', userSchema);
