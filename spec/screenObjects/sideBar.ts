import { $ } from '@wdio/globals';

export class SideBar {
    // Define the elements using getter methods
    private get leaveRequestLink() { return $('//a[contains(text(),"Leave Request")]'); }
    private get workFromHomeLink() { return $('//a[contains(text(),"Work From Home")]'); }
    private get timeSheetLink() { return $('//a[contains(text(),"Time Sheet")]'); }
    private get regularizeLink() { return $('//a[contains(text(),"Regularize")]'); }
    private get profileData() { return $('//body[1]/div[1]/div[2]/div[2]/div[1]'); }
    private get profileIconElement() { return $('//body/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/a[1]/img[1]'); }
    private get profileViewText() { return $('//span[contains(text(),"Profile View")]'); }
    private get logOutText() { return $(`//span[contains(text(),'Log Out')]`); }

    // Method to click on the image element
    async clickProfileIcon(): Promise<void> {
        await this.profileIconElement.waitForDisplayed();
        return await this.profileIconElement.click();
    }

    async clickLogout(): Promise<void> {
        await this.logOutText.waitForDisplayed();
        return await this.logOutText.click();
    }

    // Method to click on the 'Profile View' text element
    async clickProfileViewText(): Promise<void> {
        await this.profileViewText.waitForDisplayed();
        return await this.profileViewText.click();
    }

    async getProfileData(): Promise<string> {
        await this.profileData.waitForDisplayed();
        return await this.profileData.getText();
    }

    async clickLeaveRequest(): Promise<void> {
        await this.leaveRequestLink.waitForDisplayed();
        return await this.leaveRequestLink.click();
    }

    async clickWorkFromHome(): Promise<void> {
        await this.workFromHomeLink.waitForDisplayed();
        return await this.workFromHomeLink.click();
    }

    // Method to click on Time Sheet link
    async clickTimeSheet(): Promise<void> {
        await this.timeSheetLink.waitForDisplayed();
        return await this.timeSheetLink.click();
    }

    // Method to click on Regularize link
    async clickRegularize(): Promise<void> {
        await this.regularizeLink.waitForDisplayed();
        return await this.regularizeLink.click();
    }

    async getTextLeaveRequest(): Promise<string> {
        await this.leaveRequestLink.waitForDisplayed();
        return await this.leaveRequestLink.getText();
    }

    async getTextWorkFromHome(): Promise<string> {
        await this.workFromHomeLink.waitForDisplayed();
        return await this.workFromHomeLink.getText();
    }

    // Method to getText on Time Sheet link
    async getTextTimeSheet(): Promise<string> {
        await this.timeSheetLink.waitForDisplayed();
        return await this.timeSheetLink.getText();
    }

    // Method to getText on Regularize link
    async getTextRegularize(): Promise<string> {
        await this.regularizeLink.waitForDisplayed();
        return await this.regularizeLink.getText();
    }

    async isDisplayedLeaveRequest(): Promise<boolean> {
        await this.leaveRequestLink.waitForDisplayed();
        return await this.leaveRequestLink.isDisplayed();
    }

    async isDisplayedWorkFromHome(): Promise<boolean> {
        await this.workFromHomeLink.waitForDisplayed();
        return await this.workFromHomeLink.isDisplayed();
    }

    // Method to isDisplayed on Time Sheet link
    async isDisplayedTimeSheet(): Promise<boolean> {
        await this.timeSheetLink.waitForDisplayed();
        return await this.timeSheetLink.isDisplayed();
    }

    // Method to isDisplayed on Regularize link
    async isDisplayedRegularize(): Promise<boolean> {
        await this.regularizeLink.waitForDisplayed();
        return await this.regularizeLink.isDisplayed();
    }
}
