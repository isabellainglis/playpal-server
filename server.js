import express from "express";
const app = express();

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`My Express app is listening on port ${PORT}`);
});
