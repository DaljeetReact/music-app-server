import  express from 'express';

const SongRouter = express.Router();

SongRouter.get("/",async(req,res)=>{
    return res.json({status:200,msg:"All Songs"})
})

export default SongRouter;