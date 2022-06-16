import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
const usersRouter = Router();
const createUserController = new CreateUserController();
// Registro de novo usuário
usersRouter.post("/new", createUserController.handle);

// Login de usuário
usersRouter.post("/login");

export { usersRouter };
