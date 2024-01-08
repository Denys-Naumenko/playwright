import { Page, Locator, expect, errors } from "@playwright/test";
import { config } from "../config/config";

export default class BookStorePage {
    readonly page: Page;
    readonly bookGitPocketGuide: Locator;
    readonly btnProfile: Locator;
    readonly btnAddToCollection: Locator;

    constructor(page: Page) {
        this.page = page;
        this.bookGitPocketGuide = this.page.getByText("Git Pocket Guide");
        this.btnAddToCollection = this.page.getByText("Add To Your Collection");
        this.btnProfile = this.page.getByText("Profile");
    };

    async visitBookpage(): Promise<void> {
        await this.page.goto(config.bookstoreUrl, { waitUntil: "domcontentloaded" });
    };

    async confirmModalWindow(): Promise<void> {
        this.page.on('dialog', dialog => dialog.accept());
        await this.page.getByRole('button', { name: 'OK' }).click();
    }

    async validateProfileBooks(): Promise<void> {
        await this.btnProfile.click();
        const isBookVisible = await this.bookGitPocketGuide;
        await isBookVisible.waitFor({ timeout: 500 });
    }

    async addBookToColection(): Promise<void> {
        await this.bookGitPocketGuide.click();
        await this.btnAddToCollection.click();
        await this.confirmModalWindow();
        await this.validateProfileBooks();
    };
};