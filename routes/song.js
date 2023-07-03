import  express from 'express';
import {FindSong,insertSong,DeleteSong,UpdateSong,FindSongsByAlbumOrArtist} from "../controller/songController.js"
const SongRouter = express.Router();

SongRouter.get("/:id?", async (req, res) => {
    FindSong(req, res);
});

SongRouter.post("/", async (req, res) => {
    insertSong(req, res);
});

SongRouter.delete("/:id?", async (req, res) => {
    DeleteSong(req, res);
});

SongRouter.put("/", async (req, res) => {
    UpdateSong(req, res);
})

SongRouter.get("/album/:name?",async (req,res)=>{
    FindSongsByAlbumOrArtist(req,res,"album")
})

SongRouter.get("/artist/:name?",async (req,res)=>{
    FindSongsByAlbumOrArtist(req,res,"artist")
})


export default SongRouter;