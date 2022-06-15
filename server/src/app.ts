import express from "express";
import "reflect-metadata";
const app = express();

app.listen(3333, () => {
  console.log("Running on port 3333!");
});
