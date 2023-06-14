import  express from 'express';
import  artistModel from '../models/artist.js';

const ArtistRouter = express.Router();

ArtistRouter.get("/:id?",async(req,res)=>{
    let id =  req.params.id;
    if(id){
       await artistModel.findById(id).then((data)=>{
            return res.status(200).json({status:"success",data});
       }).catch((err)=>{
            return res.status(400).json({status:"error",msg:"No Artist found with this id",id});
       });
    }
         
    await artistModel.find({}).then((data)=>{
        return res.status(200).json({status:"success",data});
    }).catch((err)=>{
        return res.status(400).json({status:"error",msg:"No Record found"});

    })
});

ArtistRouter.post("/save", async(req,res)=>{

    const {name,imgUrl,instagram,twitter,facebook} = req.body;
    const newArtist =  artistModel({name,imgUrl,instagram,twitter,facebook});

    await newArtist.save().then((result) => {
      return  res.status(201).send({status:201,artist:result})
    }).catch((err) => {
      return res.status(400).send({status:400,msg:err})
    });
});

export default ArtistRouter;