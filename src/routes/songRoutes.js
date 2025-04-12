import express from "express";
import {
  getAllSongs,
  getSingleSong,
  getSingleSongChords,
  getSingleSongDetails,
  getSingleSongSections,
} from "../controllers/songControllers.js";

const router = express.Router();

router.get("/", getAllSongs);

router.get("/:id", getSingleSong);

router.get("/:id/details", getSingleSongDetails);

router.get("/:id/chords", getSingleSongChords);

router.get("/:id/sections", getSingleSongSections);

export default router;
