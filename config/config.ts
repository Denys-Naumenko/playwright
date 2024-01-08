import dotenv from 'dotenv';
dotenv.config();

export const config = {
    baseUrl: process.env.BASE_URL,
    loginUrl: process.env.LOGIN_URL,
    bookstoreUrl: process.env.BOOKSTORE_URL,
    userName: process.env.USER_NAME ?? 'username',
    password: process.env.PASSWORD ?? 'password'
};