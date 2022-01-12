import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateClient {
  name: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ name, password }: ICreateClient) {
    // Validar se user existe
    const clientExist = await prisma.clients.findFirst({ where: { name: { mode: "insensitive" } } })

    if (clientExist) {
      throw new Error("Cliente Já Existe!")
    }

    // Criptografar senha
    const hashPass = await hash(password, 10)

    // Salvar Cliente
    const client = await prisma.clients.create({
      data: {
        name, password: hashPass
      }
    })

    return client;
  }
}