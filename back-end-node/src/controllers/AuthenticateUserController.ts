import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { User } from "../entities/User";
import { compareSync } from "bcryptjs";
import { sign } from "jsonwebtoken";
import "dotenv/config";

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const userRepository = AppDataSource.getRepository(User);
    const { email, password } = request.body;
    const user = await userRepository.findOneBy({ userEmail: email });
    if (!user) {
      throw new Error("E-mail ou senha incorreta!");
    }
    const passwordMatch = compareSync(password, user.userPassword);
    if (!passwordMatch) {
      throw new Error("E-mail ou senha incorreta!");
    }
    const token = sign({ email: user.userEmail }, process.env.SECRET_KEY, {
      subject: user.userId,
      expiresIn: "1d",
    });
    return response.status(200).json({ message: "Login realizado com sucesso!", token });
  }
}
