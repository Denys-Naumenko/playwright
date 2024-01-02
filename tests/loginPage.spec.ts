import { test, expect } from '@playwright/test';
import HomePage from '../pages/homePage';
import LoginPage from '../pages/loginPage';

test.describe('Open Home page in browser and validate visible categories', async () => {
  let page: Page;
    let loginPage;

  test.beforeAll('Visit homepage', async ({ browser }) => {
    page = await browser.newPage({ waitUntil: "domcontentloaded" });
    loginPage = new LoginPage(page);
    await loginPage.visitLoginPage();
  });

    test("Validate available categories", async () => {
         
        await loginPage.typeUserName();
        await loginPage.typePassword();
        await loginPage.clickLoginButton();
        await loginPage.validatelogin();
  });

});