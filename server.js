import express from "express";
import "dotenv/config";
import cors from "cors";
import songRoutes from "./routes/songRoutes.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({ origin: process.env.FRONTEND_URL }));

app.get("/", (_req, res) => {
  res.send("App is running...");
});

app.use("/songs", songRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
