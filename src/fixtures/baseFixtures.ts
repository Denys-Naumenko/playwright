import { test as base } from '@playwright/test';
import LoginPage from '../../pages/loginPage';
import ElementsPage from '../../pages/elementsPage';


type MyFixtures ={
    login: LoginPage
    element: ElementsPage
}


const test = base.extend<MyFixtures>({
    login: async({page}, use)=>{
        const loginP = new LoginPage(page)
        await use(loginP)
    },

    element: async ({page}, use) => {
        await use (new ElementsPage(page))
    }
})

export { test };