import { $ } from '@wdio/globals';
import { collectTextsFromElements } from '../../formatedData/leaveRequestData.ts';
import path from 'path';
import * as fs from 'fs';


export class yourRquestPage {
    // Define the elements using getter methods
    private get yourRequest() { return $('//a[@id="material-requests-tab"]'); }
    private get addLeave() { return $('//button[contains(text(),"Add Leave")]'); }
    private get approvedCount() { return $('//body/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[2]/div[1]'); }
    private get leaveRequestData() { return $(`//table[@id='enquiry_table']`); }


    // Method to click on the 'Your Request' link
    async clickYourRequest(): Promise<void> {
        await this.yourRequest.waitForDisplayed();
        await this.yourRequest.click();
    }

    // Method to click on the 'Add Leave' button
    async clickAddLeave(): Promise<void> {
        await this.addLeave.waitForDisplayed();
        await this.addLeave.click();
    }

    // Method to get the approved count text
    async getApprovedCountText(): Promise<string> {
        await this.approvedCount.waitForDisplayed();
        return await this.approvedCount.getText();
    }

    // Method to get the leave request data text
    async getLeaveRequestDataText(): Promise<string> {
        await this.leaveRequestData.waitForDisplayed();
        return await this.leaveRequestData.getText();
    }

    // Method to click on the 'Your Request' link
    async getAppliedLeaveCount() {
        let i = 1;
        let j = 6;
        const appliedCount = await collectTextsFromElements(i, j)
        console.log("AppliedCount", appliedCount)
        return appliedCount

    }

    async getLeaveType() {
        let i = 1;
        let j = 5;
        const leaveType = await collectTextsFromElements(i, j)
        console.log("leaveType", leaveType)
        return leaveType

    }

    async getStatus() {
        let i = 1;
        let j = 7;
        const status = await collectTextsFromElements(i, j)
        console.log("Status", status)
        return status
    }

}





