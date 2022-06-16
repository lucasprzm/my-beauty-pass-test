import { Request, Response } from "express";
import { User } from "../entities/User";
import { AppDataSource } from "../database/data-source";
import { hash } from "bcryptjs";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const userRepository = AppDataSource.getRepository(User);
    const { name, email, password } = request.body;
    const passwordHash = await hash(password, 10);
    if (!email) {
      throw new Error("Incorrect email!");
    }
    const userAlreadyExists = await userRepository.findOneBy({ userEmail: email });
    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }
    const user = userRepository.create({
      userName: name,
      userEmail: email,
      userPassword: passwordHash,
    });
    await userRepository.save(user);
    return response.status(200).json({ message: "Usuário criado!" });
  }
}
