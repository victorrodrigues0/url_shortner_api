import { Prisma } from "../generated/prisma";
import { prisma } from "../libs/prisma";


export const addUrl = async (data: Prisma.urlsCreateInput) => {
    try {
        return await prisma.urls.create({ data });
    } catch (error) {
        console.log(error);
        return false;
    }
}