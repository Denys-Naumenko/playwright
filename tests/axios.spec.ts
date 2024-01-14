import { test } from '../src/fixtures/baseFixtures';
import  axios from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';

test.describe('Books Collection User Actions with axios', async () => {
    let client: Axios;
    let userId: string;
    let token: string;


    test.beforeAll('Login User and save user data', async () => {
        const jar = new CookieJar();

        client = wrapper(axios.create({
            baseURL: process.env.LOGIN_URL,
            validateStatus: function (status) {
                return status >= 200 && status < 300;
            },
            jar
        }));

        const loginData = await client.post('https://demoqa.com/Account/v1/Login', {
            "userName": process.env.USER_NAME,
            "password": process.env.PASSWORD
        });

        userId = loginData.data.userId
        token = loginData.data.token
        client.defaults.headers.common['Authorization'] = `Bearer ${token}`
    });

    test('Add book to Collection', async ({ page }) => {
        const response = await client.post('https://demoqa.com/BookStore/v1/Books', {
            "userId": userId,
            "collectionOfIsbns": [
                {
                    "isbn": "9781449325862"
                }
            ]
        })
    });

    test('Delete book from Collections', async ({ page }) => {
        const response3 = await client.delete('https://demoqa.com/BookStore/v1/Book', {
            data: {
                "isbn": "9781449325862", "userId": userId
            }
        })
    });

});