import express from "express";
import {
  getAllSongs,
  getSingleSong,
  getSingleSongChords,
} from "../controllers/songController.js";

const router = express.Router();

router.get("/", getAllSongs);

router.get("/:id", getSingleSong);

router.get("/:id/chords", getSingleSongChords);

export default router;
