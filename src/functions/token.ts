import jwt from 'jsonwebtoken';

export const tokenJWT = (user: UserType) => {
    const payload = {
        id: user.id
    }

    return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '1d' });
}