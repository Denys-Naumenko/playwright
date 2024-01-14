import { APIRequestContext, test as base, request } from '@playwright/test';
import LoginPage from '../../pages/loginPage';
import ElementsPage from '../../pages/elementsPage';
import BookStorePage from '../../pages/bookStorePage';
import { storageStatePath } from '../links/path'

type MyFixtures = {
    login: LoginPage
    element: ElementsPage
    bookstore: BookStorePage,
    userApiRequest: APIRequestContext
}


const test = base.extend<MyFixtures>({
    login: async ({ page }, use) => {
        const loginP = new LoginPage(page)
        await use(loginP)
    },

    element: async ({ page }, use) => {
        await use(new ElementsPage(page))
    },

    bookstore: async ({ page }, use) => {
        await use(new BookStorePage(page))
    },

    userApiRequest: async ({ }, use) => {
        const newCtx = await request.newContext({
            storageState: storageStatePath,
        });
        await use(newCtx);
        await newCtx.dispose();
    }
})

export { test };