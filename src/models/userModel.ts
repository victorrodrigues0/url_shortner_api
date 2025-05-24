import { Prisma } from "../generated/prisma";
import { prisma } from "../libs/prisma";

export const createUser = async (data: Prisma.usersCreateInput) => {
    try {
        return await prisma.users.create({ data });
    } catch (error) {
        console.log(error);
        return false;
    }
}