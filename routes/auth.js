import  express from 'express';
import {fireService} from '../config/firebase.config.js'
import {insertUser} from "../controller/userController.js"
import users from '../models/users.js';

const userRoutes = express.Router();
// define the default user routes
userRoutes.get('/:id?',async(req, res) => {
   let id = req.params.id;
   if (id) {
       await users.findById(id).then((data) => {
           return res.status(200).json({ status: "success", data });
       }).catch((err) => {
           return res.status(400).json({ status: "error", msg: "No User found with this id", id });
       });
   }

   await users.find({}).then((data) => {
       return res.status(200).json({ status: "success", data });
   }).catch((err) => {
       return res.status(400).json({ status: "error", msg: "No Record found" });

   })
});
  
// define the home page route
userRoutes.get('/login',async (req, res)  => {
   let  token = req.headers.authorization;
   if(!token){
    return res.status(500).send('No Token found ');
   }
   token =  token.split(' ')[1]; //spit Brarer from the request header

   //check the gmail account token with firebase services account 
   await fireService.auth().verifyIdToken(token).then((data)=>{
      insertUser(data,res); // send decoded information for inserting into DB
   }).catch((error)=>{
      res.status(500).json({'status':500,'message':error});
   });
});

export default userRoutes;