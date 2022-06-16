import express from "express";
import "reflect-metadata";
import "./database/data-source";
import { usersRouter } from "./routes/users";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", usersRouter);
app.listen(3333, () => {
  console.log("Server running locally on port 3333!");
});
