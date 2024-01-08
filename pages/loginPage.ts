import { Page, Locator, expect } from "@playwright/test";
import { config } from "../config/config";

export default class LoginPage {
    readonly page: Page;
    readonly inputUserName: Locator;
    readonly inputPassword: Locator;
    readonly btnLogin: Locator;
    readonly userNameValue: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inputUserName = this.page.locator("#userName");
        this.inputPassword = this.page.locator('#password');
        this.btnLogin = this.page.locator('#login');
        this.userNameValue = this.page.locator('#userName-value');
    };

    async visitLoginPage(): Promise<void> {
        await this.page.goto( config.loginUrl , { waitUntil: "domcontentloaded" });
    };

    async typeUserName(): Promise<void> {
        await this.inputUserName.fill(config.userName);
    }

    async typePassword(): Promise<void> {
        await this.inputPassword.fill(config.password);
    }

    async clickLoginButton(): Promise<void>{
        await this.btnLogin.click();
    }

    async validatelogin(): Promise<void>{
        expect(await this.userNameValue.textContent()).toEqual(config.userName);
    }

    async loginUser(): Promise<void>{
       await this.clickLoginButton();
       await this.typeUserName();
       await this.typePassword();
       await this.clickLoginButton();
    }

};