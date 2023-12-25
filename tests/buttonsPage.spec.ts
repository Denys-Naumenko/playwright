import { test } from '@playwright/test';
import ElementsPage from '../pages/elementsPage';

test.describe('Visit buttons sub category, click and validate messages', async () => {
    let page: Page;
    let elementsPage;

    test('Visit Buttons Page via url', async ({ browser }) => {
        page = await browser.newPage({ waitUntil: "domcontentloaded" });
        elementsPage = new ElementsPage(page);
        await elementsPage.visitElementsPage();
    });

    test("Buttons test", async () => {
        await elementsPage.clickToButtonsSubCategory();
        await elementsPage.checkDoubleClick();
        await elementsPage.checkRightClick();
        await elementsPage.checkDynamicClick();
    })

})