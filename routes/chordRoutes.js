import express from "express";
import {
  getAllSongChords,
  getChordData,
} from "../controllers/chordControllers.js";

const router = express.Router();

router.get("/", getChordData);

router.get("/all", getAllSongChords);

export default router;
