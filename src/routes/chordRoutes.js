import express from "express";
import { getChordData } from "../controllers/chordControllers.js";

const router = express.Router();

router.get("/", getChordData);

export default router;
