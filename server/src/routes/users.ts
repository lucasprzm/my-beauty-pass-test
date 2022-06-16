import { Router } from "express";
const usersRouter = Router();

// Registro de novo usuário
usersRouter.post("/new");

// Login de usuário
usersRouter.post("/login");

export { usersRouter };
