import { Router } from "express";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateUserController } from "../controllers/CreateUserController";
const usersRouter = Router();
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
// Registro de novo usuário
usersRouter.post("/new", createUserController.handle);

// Login de usuário
usersRouter.post("/login", authenticateUserController.handle);

export { usersRouter };
