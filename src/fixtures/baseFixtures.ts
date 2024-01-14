import { test as base } from '@playwright/test';
import LoginPage from '../../pages/loginPage';
import ElementsPage from '../../pages/elementsPage';
import BookStorePage from '../../pages/bookStorePage';

type MyFixtures = {
    login: LoginPage
    element: ElementsPage
    bookstore: BookStorePage
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
    }
})

export { test };