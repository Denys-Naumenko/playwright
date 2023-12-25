import { test, expect, Locator } from '@playwright/test';

test.describe('Playwright homework 2', async () => {


  test('Validate Category and Buttons', async ({ page }) => {

    await test.step("Visit home page and validate available categories", async () => {
      await page.goto('', { waitUntil: "domcontentloaded" });
      const actualCategoryCount: number = await page.locator('.card-body').count();
      const expectedCategoryTitle: string[] = [
        "Elements",
        "Forms",
        "Alerts, Frame & Windows",
        "Widgets",
        "Interactions",
        "Book Store Application"]

      const actualCategoryTitle: string[] = [];

      for (let index = 0; index < actualCategoryCount; index++) {
        const categoryTitle: string = await page.locator('.card-body h5').nth(index).textContent();
        actualCategoryTitle.push(categoryTitle);
      }

      expect(actualCategoryTitle).toEqual(expectedCategoryTitle);
    })

    await test.step("Buttons test", async () => {
      await page.goto('', { waitUntil: "domcontentloaded" });
      const elementCategory: Locator = page.locator('.card-body', { has: page.getByText("Elements") })
      await elementCategory.click();
      await page.getByText("Buttons").click();
      await expect(page).toHaveURL('https://demoqa.com/buttons')
      await page.locator('#doubleClickBtn').dblclick()
      expect(await page.locator('#doubleClickMessage').textContent()).toEqual('You have done a double click');
      await page.locator('#rightClickBtn').click({ button: "right" });
      expect(await page.locator('#rightClickMessage').textContent()).toEqual('You have done a right click');
      const dynamicButton: Locator = await page.getByRole('button', { name: 'Click Me', exact: true });
      await dynamicButton.click();
      expect(await page.locator('#dynamicClickMessage').textContent()).toEqual('You have done a dynamic click');
    })

  })
});