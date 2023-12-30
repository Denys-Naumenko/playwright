import { test } from '@playwright/test';
import ElementsPage from '../pages/elementsPage';

test.describe('Visit buttons sub category, click and validate messages', async () => {
    let page: Page;
    let elementsPage;

    test.beforeAll('Visit Buttons Page via url', async ({ browser }) => {
        page = await browser.newPage({ waitUntil: "domcontentloaded" });
        elementsPage = new ElementsPage(page);
    });

    test("Buttons test", async () => {
        await elementsPage.visitElementsPage();
        await elementsPage.clickToButtonsSubCategory();
        await elementsPage.checkDoubleClick();
        await elementsPage.checkRightClick();
        await elementsPage.checkDynamicClick();
    })

})