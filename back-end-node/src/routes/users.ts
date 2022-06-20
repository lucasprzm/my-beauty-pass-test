import { Router } from "express";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateUserController } from "../controllers/CreateUserController";
import { GetUsernameController } from "../controllers/GetUsernameController";
const usersRouter = Router();
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const getUsernameController = new GetUsernameController();
// Registro de novo usuário
usersRouter.post("/new", createUserController.handle);

// Login de usuário
usersRouter.post("/login", authenticateUserController.handle);

// Nome de usuário para a Home
usersRouter.get("/name", getUsernameController.handle);

export { usersRouter };
