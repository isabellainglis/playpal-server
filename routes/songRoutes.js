import express from "express";
import { getAllSongs } from "../controllers/songController.js";

const router = express.Router();

router.get("/", getAllSongs);

router.get("/chords");

export default router;
