import  express from 'express';
import {FindAlbum,insertAlbum,UpdateAlbum,DeleteAlbum} from "../controller/albumController.js"

const AlbumsRouter = express.Router();

  AlbumsRouter.get("/:id?", async (req, res) => {
    FindAlbum(req, res);
  });

  AlbumsRouter.post("/", async (req, res) => {
    insertAlbum(req, res);
  });

  AlbumsRouter.delete("/:id?", async (req, res) => {
    DeleteAlbum(req, res);
  });

  AlbumsRouter.put("/", async (req, res) => {
    UpdateAlbum(req, res);
  })
export default AlbumsRouter;