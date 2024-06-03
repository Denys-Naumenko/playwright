import { test } from "../src/fixtures/baseFixtures";
import { expect } from "@playwright/test";

test.beforeAll('Fetch Books Api, response must be ok', async ({ userApiRequest }) => {
    const response = await userApiRequest.fetch('https://demoqa.com/BookStore/v1/Books');
    expect.soft(response.ok()).toBe(true);
    expect.soft(response.status()).toBe(200);
});

test('Mock response body, validate visible via FE', async ({ page }) => {

    await page.route('https://demoqa.com/BookStore/v1/Books', async route => {
        
        route.fulfill({
            status: 200,
            contentType: 'application.json',
            body: JSON.stringify({
                "books": [
                    {
                        "isbn": "97814493258621",
                        "title": "Git Pocket Guide Modified",
                        "subTitle": "A Working Introduction",
                        "author": "Richard E. Silverman",
                        "publish_date": "2020-06-04T08:48:39.000Z",
                        "publisher": "O'Reilly Media",
                        "pages": 234,
                        "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp",
                        "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
                    }]
           })
        });
    });

    await page.goto('https://demoqa.com/books', { waitUntil: "domcontentloaded" });
    await expect(page.getByText('Git Pocket Guide Modified', { exact: true })).toBeVisible();
});