import  express from 'express';
import {fireService} from '../config/firebase.config.js'

const userRoutes = express.Router();
// define the default user routes
userRoutes.get('/', (req, res) => {res.send('Users Routes')});
  
// define the home page route
userRoutes.get('/login',async (req, res)  => {
   let  token = req.headers.authorization;
   if(!token){
    return res.status(500).send('No Token found ');
   }
   token =  token.split(' ')[1]; //spit Brarer from the request header
   try {
      const decode = await fireService.auth().verifyIdToken(token);
      if(!decode){
         return res.status(401).json({message:'un un Authorized user '});
      }else{
         return res.status(200).json(decode);
      }
   } catch (error) {
      return res.status(500).json({msg:error})
   }
});

export default userRoutes;