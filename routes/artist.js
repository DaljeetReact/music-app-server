import express from 'express';
import { insertArtist, FindArtist, UpdateArtist, DeleteArtist } from '../controller/artistController.js';

const ArtistRouter = express.Router();

  ArtistRouter.get("/:id?", async (req, res) => {
    FindArtist(req, res);
  });

  ArtistRouter.post("/", async (req, res) => {
    insertArtist(req, res);
  });

  ArtistRouter.delete("/:id?", async (req, res) => {
    DeleteArtist(req, res);
  });

  ArtistRouter.put("/", async (req, res) => {
    UpdateArtist(req, res);
  })
export default ArtistRouter;