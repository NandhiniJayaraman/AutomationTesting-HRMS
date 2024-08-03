import { $ } from '@wdio/globals';
import data from '../testData/data.json' assert { type: 'json' };

export default class LoginPage {
    private get loginInput() { return $('//input[@id="loginId"]'); }
    private get passwordInput() { return $('//input[@id="password"]'); }
    private get loginButton() { return $('//button[@id="btn-login"]'); }

    async SetloginCredential() {
        const username = await this.loginInput.setValue(data[0].Username);
        const password = await this.passwordInput.setValue(data[0].Password);
        return { username, password }

    }

    // Method to get text from the login input field
    async getLoginInputText(): Promise<string> {
        await this.loginInput.waitForDisplayed();
        return await this.loginInput.getValue();
    }

    // Method to get text from the password input field
    async getPasswordInputText(): Promise<string> {
        await this.passwordInput.waitForDisplayed();
        return await this.passwordInput.getValue();
    }

    // Method to check if the login button is displayed
    async isLoginButtonDisplayed(): Promise<boolean> {
        await this.loginButton.waitForDisplayed();
        return await this.loginButton.isDisplayed();
    }

    async clickLoginButton() {
        await this.loginButton.waitForDisplayed();
        await (await this.loginButton).click();
    }
}
