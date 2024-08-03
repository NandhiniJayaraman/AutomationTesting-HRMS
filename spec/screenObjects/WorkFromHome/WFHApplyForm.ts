import data from '../../testData/data.json' assert { type: 'json' };


export class WFHApplyForm {
    // Define the elements using getter methods
    private get workFromHome() { return $(`//button[contains(text(),'Add Work From Home Request')]`); }

    private get dayDuration() { return $(`//label[contains(text(),'Day duration')]`); }
    private get halfDayRadio() { return $(`//label[contains(text(),'Half day')]`); }
    private get fullDayRadio() { return $(`//label[contains(text(),'Full day')]`); }
    private get workDate() { return $(`//input[@id='work-date']`); }
    private get reasonField() { return $(`//textarea[@id='reason']`); }
    private get cancel() { return $(`//button[contains(text(),'Cancel')]`); }
    private get submit() { return $(`//button[@id='btn-wrfrhm-submit']`); }
    private get firstHalf() { return $(`//label[contains(text(),'1st Half')]`); }
    private get secondHalf() { return $(`//label[contains(text(),'2nd Half')]`); }
    private get calender() { return $(`//span[@id='basic-addon2']`); }


    async clickAddWorkFromHome(): Promise<void> {
        await this.workFromHome.waitForDisplayed();
        await this.workFromHome.click();
    }

    async clickDayDuration(): Promise<void> {
        await this.dayDuration.waitForDisplayed();
        await this.dayDuration.click();
    }

    async clickHalfDayRadio(): Promise<void> {
        await this.halfDayRadio.waitForDisplayed();
        await this.halfDayRadio.click();
    }

    async clickFullDayRadio(): Promise<void> {
        await this.fullDayRadio.waitForDisplayed();
        await this.fullDayRadio.click();
    }

    async clickFirstHalfRadio(): Promise<void> {
        await this.firstHalf.waitForDisplayed();
        await this.firstHalf.click();
    }

    async clickSecondHalfRadio(): Promise<void> {
        await this.secondHalf.waitForDisplayed();
        await this.secondHalf.click();
    }

    async clickCalendar(): Promise<void> {
        await this.calender.waitForDisplayed();
        await this.calender.click();
    }


    async clickWorkDate(): Promise<void> {
        await this.workDate.waitForDisplayed();
        await this.workDate.click();
    }

    async clickReasonField(): Promise<void> {
        await this.reasonField.waitForDisplayed();
        await this.reasonField.click();
    }

    async clickCancel(): Promise<void> {
        await this.cancel.waitForDisplayed();
        await this.cancel.click();
    }

    async clickSubmit(): Promise<void> {
        await this.submit.waitForDisplayed();
        await this.submit.click();
    }

    async getDayDurationText(): Promise<string> {
        await this.dayDuration.waitForDisplayed();
        return await this.dayDuration.getText();
    }

    async getHalfDayRadioText(): Promise<string> {
        await this.halfDayRadio.waitForDisplayed();
        return await this.halfDayRadio.getText();
    }

    async getFullDayRadioText(): Promise<string> {
        await this.fullDayRadio.waitForDisplayed();
        return await this.fullDayRadio.getText();
    }

    async getWorkDateText(): Promise<string> {
        await this.workDate.waitForDisplayed();
        return await this.workDate.getText();
    }

    async getReasonFieldText(): Promise<string> {
        await this.reasonField.waitForDisplayed();
        return await this.reasonField.getText();
    }

    async getCancelText(): Promise<string> {
        await this.cancel.waitForDisplayed();
        return await this.cancel.getText();
    }

    async getSubmitText(): Promise<string> {
        await this.submit.waitForDisplayed();
        return await this.submit.getText();
    }


    async setReason(): Promise<void> {
        await this.reasonField.waitForDisplayed();
        await this.reasonField.setValue(data[0].reason);

    }





}
