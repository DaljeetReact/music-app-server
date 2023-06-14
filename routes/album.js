import  express from 'express';

const AlbumsRouter = express.Router();

AlbumsRouter.get("/",async(req,res)=>{
    return res.json({status:200,msg:"All Albums"})
})

export default AlbumsRouter;