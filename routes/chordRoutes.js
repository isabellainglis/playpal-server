import express from "express";
import { getAllChords } from "../controllers/chordControllers.js";

const router = express.Router();

router.get("/", getAllChords);

export default router;
