export type User = {
    id: string;
    userName: string;
    emailAddress: string;
    jwtToken: string;
    imageUrl?: string;
}

export type LoginCreds = {
    email: string;
    password: string;
}

export type RegisterCreds = {
    emailAddress: string;
    userName: string;
    password: string;
    roles: string[];
}