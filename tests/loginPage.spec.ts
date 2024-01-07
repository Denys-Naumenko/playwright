import { test, expect } from '@playwright/test';
import HomePage from '../pages/homePage';
import LoginPage from '../pages/loginPage';

test.describe('Test for Login Page', async () => {
  let page: Page;
    let loginPage;

  test.beforeAll('Visit login page', async ({ browser }) => {
    page = await browser.newPage({ waitUntil: "domcontentloaded" });
    loginPage = new LoginPage(page);
    await loginPage.visitLoginPage();
  });

    test("Type user data, login and validate login", async () => {
         
        await loginPage.typeUserName();
        await loginPage.typePassword();
        await loginPage.clickLoginButton();
        await loginPage.validatelogin();
  });

});