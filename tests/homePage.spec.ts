import { test, expect } from '@playwright/test';
import HomePage from '../pages/homePage';
import { expectedCategoryTitle } from '../test-data/expectedCategoryArray';

test.describe('Open Home page in browser and validate visible categories', async () => {
  let page: Page;
  let homePage;

  test('Visit homepage', async ({ browser }) => {
    page = await browser.newPage({ waitUntil: "domcontentloaded" });
    homePage = new HomePage(page);
    await homePage.visitHomePage();
  });

  test("Validate available categories", async () => {
    const actualCategoryTitle = await homePage.getActualCategoryTitle();
    expect(actualCategoryTitle).toEqual(expectedCategoryTitle);
  });

});