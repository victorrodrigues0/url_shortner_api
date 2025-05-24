interface UserType {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

interface urlType {
    id: number;
    original: string;
    shorten: string;
    user_id: number;
    createdAt: Date;
    updatedAt: Date;
}