import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import "dotenv/config";
import { AppDataSource } from "../database/data-source";
import { User } from "../entities/User";

interface IPayLoad {
  sub: string;
}

export class GetUsernameController {
  async handle(request: Request, response: Response) {
    const userRepository = AppDataSource.getRepository(User);
    const authToken = request.headers.authorization;
    if (!authToken) {
      throw new Error("Usuário não está logado!");
    }
    const [, token] = authToken.split(" ");
    const { sub } = verify(token, process.env.SECRET_KEY) as IPayLoad;
    const { userName } = await userRepository.findOneBy({ userId: sub });
    return response.json({ name: userName });
  }
}
