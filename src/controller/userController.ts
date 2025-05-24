import { RequestHandler } from "express";
import { userSchema } from "../schemas/userSchema";
import { createUser } from "../models/userModel";

export const registerUser: RequestHandler = async (req, res) => {
    const data = req.body;

    console.log(data);

    const userValidation = userSchema.safeParse(data);

    if (!userValidation.success) {
        res.status(500).json({ "message": "Invalid user data" });
        return;
    }

    const addDatabase = await createUser(userValidation.data);

    if (!addDatabase) {
        res.status(500).json({ "message": "Error registering user" });
        return;
    }

    res.status(200).json({ "message": "User registered" });
    return;
}