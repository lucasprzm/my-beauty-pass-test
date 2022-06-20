import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "reflect-metadata";
import "./database/data-source";
import { usersRouter } from "./routes/users";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", usersRouter);
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({ error: err.message });
  }
  return response.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});
app.listen(3333, () => {
  console.log("Server running locally on port 3333!");
});