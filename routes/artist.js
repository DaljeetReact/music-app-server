import  express from 'express';

const ArtistRouter = express.Router();

ArtistRouter.get("/",async(req,res)=>{
    return res.json({status:200,msg:"All Artists"})
})

export default ArtistRouter;