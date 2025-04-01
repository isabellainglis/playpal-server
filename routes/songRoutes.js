import express from "express";
import {
  getAllSongs,
  getSingleSong,
  getSingleSongChords,
  getSingleSongSections,
} from "../controllers/songControllers.js";

const router = express.Router();

router.get("/", getAllSongs);

router.get("/:id", getSingleSong);

router.get("/:id/chords", getSingleSongChords);

router.get("/:id/sections", getSingleSongSections);

export default router;
