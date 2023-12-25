import { Page, expect, Locator } from "@playwright/test";

export default class ElementsPage {
    readonly page: Page;
    readonly buttonsSubCategory: Locator;
    readonly doubleClickBtn: Locator;
    readonly rightClickBtn: Locator;
    readonly dynamicClickBtn: Locator;
    readonly doubleClickMessage: Locator;
    readonly rightClickMessage: Locator;
    readonly dynamicClickMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonsSubCategory = this.page.getByText("Buttons");
        this.doubleClickBtn = this.page.locator('#doubleClickBtn')
        this.rightClickBtn = this.page.locator('#rightClickBtn');
        this.dynamicClickBtn = this.page.getByRole('button', { name: 'Click Me', exact: true });
        this.doubleClickMessage = this.page.locator('#doubleClickMessage');
        this.rightClickMessage = this.page.locator('#rightClickMessage');
        this.dynamicClickMessage = this.page.locator('#dynamicClickMessage');
    };

    async visitElementsPage(): Promise<void> {
        await this.page.goto('https://demoqa.com/elements', { waitUntil: "domcontentloaded" });
    };

    async clickToButtonsSubCategory(): Promise<void> {
        await this.buttonsSubCategory.click();
        await expect(this.page).toHaveURL('https://demoqa.com/buttons');
    }

    async checkDoubleClick(): Promise<void> {
        await this.doubleClickBtn.dblclick();
        expect(await this.doubleClickMessage.textContent()).toEqual('You have done a double click');
        console.log(this.doubleClickMessage.textContent())
    }

    async checkRightClick(): Promise<void> {
        await this.rightClickBtn.click({ button: "right" });
        expect(await this.rightClickMessage.textContent()).toEqual('You have done a right click');
    }

    async checkDynamicClick(): Promise<void> {
        await this.dynamicClickBtn.click();
        expect(await this.dynamicClickMessage.textContent()).toEqual('You have done a dynamic click');
    }

};