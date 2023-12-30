import { Locator, Page } from "@playwright/test";

export default class HomePage {
    readonly page: Page;
    readonly actualCategory: Locator;
    readonly elementCategory: Locator;

    constructor(page: Page) {
        this.page = page;
        this.actualCategory = this.page.locator('.card-body h5');
        this.elementCategory = this.page.locator('.card-body', { has: page.getByText("Elements") })
    };

    async visitHomePage(): Promise<void> {
        await this.page.goto('', { waitUntil: "domcontentloaded" });
    };

    async getActualCategoryTitle(): Promise<any> {
        const actualCategoryTitle: string[] = [];
        for (const iterator of await this.actualCategory.all()) {
            actualCategoryTitle.push(await iterator.innerText())
        }
        return actualCategoryTitle;
    };

    async clickToElementsCategory(): Promise<void>{
         await this.elementCategory.click();
    };

};