import express from "express";
import "reflect-metadata";
import "./database/data-source";
const app = express();

app.listen(3333, () => {
  console.log("Server running locally on port 3333!");
});
