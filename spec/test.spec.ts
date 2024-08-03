import * as fs from 'fs';
import * as path from 'path';
import { excractDataFromExcel } from "./convertExcelToJson.ts";
import { formatData, ProfileData } from "./formatedData/personalInfoData.ts";
import LoginPage from "./screenObjects/login.ts";
import { SideBar } from "./screenObjects/sideBar.ts";
import { fileURLToPath } from 'url';
import { yourRquestPage } from './screenObjects/LeaveRequest/yourRequest.ts';
import DataHandler from './formatedData/chartData.ts';
import { WFHApplyForm } from './screenObjects/WorkFromHome/WFHApplyForm.ts';
import allureReporter from '@wdio/allure-reporter';
import { addCustomStep } from './helper/elementHelper.ts';

describe('HRMS Testing', () => {
    const loginPage = new LoginPage();
    const sideBar = new SideBar();
    const yourRequest = new yourRquestPage();
    const workFromhome = new WFHApplyForm();

    const dataHandler = new DataHandler();
    const extract = new excractDataFromExcel();

    // Derive __dirname
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    before(async () => {
        // Extract data from Excel before starting tests
        await extract.excractdata();

        // Open HRMS login page
        await browser.url('https://hrms.finstein.ai/Account/login');
    });

    it(`FIN-HRMS-001: should log in to HRMS successfully`, async () => {
        allureReporter.addStory('Login');

        await loginPage.SetloginCredential();

        await loginPage.clickLoginButton();

        await browser.pause(3000);
    });

    it(`FIN-HRMS-002: should navigate to Leave Request page`, async () => {
        allureReporter.addStory('Leave Request');

        const LeaveRequestText = await sideBar.getTextLeaveRequest();
        const LeaveRequestDisplay = await sideBar.isDisplayedLeaveRequest();

        await addCustomStep(LeaveRequestDisplay, true, 'Leave Request Option is Displayed');

        await expect(LeaveRequestText).toMatch('Leave Request');

        await sideBar.clickLeaveRequest();

        await browser.pause(3000);
    });

    it(`FIN-HRMS-003: Should get Leave Counts`, async () => {
        allureReporter.addStory('Leave Request');

        await yourRequest.clickYourRequest();

        const data = await yourRequest.getLeaveRequestDataText();
        console.log('Extracted data:', data);

        const leaveCount = await yourRequest.getAppliedLeaveCount();
        const leaveType = await yourRequest.getLeaveType();
        const status = await yourRequest.getStatus();

        await dataHandler.writeDataToFile(leaveCount, leaveType, status);
    });

    it(`FIN-HRMS-004: should navigate to Work From Home Request page`, async () => {
        allureReporter.addStory('Work From Home Request');

        await sideBar.clickWorkFromHome();

        await browser.pause(3000);
    });

    it(`FIN-HRMS-005: Apply work from home for Half day`, async () => {
        allureReporter.addStory('Apply Half day work from home Request');

        await workFromhome.clickAddWorkFromHome();

        await browser.pause(3000);

        await workFromhome.clickHalfDayRadio();

        await workFromhome.clickFirstHalfRadio();

        await workFromhome.setReason();

        await workFromhome.clickCancel();
    });

    it(`FIN-HRMS-006: should navigate to Profile page, extract, format, and save profile data`, async () => {
        allureReporter.addStory('Profile Page Details');

        await sideBar.clickProfileIcon();
        await browser.pause(3000);

        await sideBar.clickProfileViewText();

        const rawData = await sideBar.getProfileData();
        console.log('Personal details:', rawData);

        const dataParts = rawData.split('\n');

        const profileData: ProfileData = {
            Name: dataParts[1],
            Designation: dataParts[2],
            Address: {
                Primary: dataParts[3],
                Alternate: dataParts[4]
            },
            Contact: {
                Email: dataParts[5],
                Phone: dataParts[6]
            },
            Profile: {
                DateOfBirth: dataParts[7],
                Gender: dataParts[8],
                FatherName: dataParts[9],
                MotherName: dataParts[10],
                NomineeName: dataParts[11],
                LanguageKnown: dataParts[12].split(';'),
                Religion: dataParts[13],
                BloodGroup: dataParts[14],
                MaritalStatus: dataParts[15],
                SpouseName: dataParts[16],
                Children: dataParts[17].split(';')
            },
            EmergencyContacts: [
                {
                    Name: dataParts[18],
                    Relationship: dataParts[19],
                    ContactNumber: dataParts[20]
                },
                {
                    Name: dataParts[21],
                    Relationship: dataParts[22],
                    ContactNumber: dataParts[23]
                }
            ],
            Qualification: {
                Degree: dataParts[24],
                Institution: dataParts[25],
                Year: dataParts[26]
            },
            CareerDetails: {
                Organization: dataParts[27],
                Designation: dataParts[28],
                Department: dataParts[29],
                CurrentlyWorksHere: dataParts[30],
                WorkingPeriod: dataParts[31],
                CurrentCTC: Number(dataParts[32]),
                ExpectedCTC: Number(dataParts[33])
            }
        };

        const formattedDataJson = await formatData(profileData, 'json');
        const formattedDataXml = await formatData(profileData, 'xml');

        const outputDir = path.join(__dirname, 'formattedProfileData');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir);
        }

        fs.writeFileSync(path.join(outputDir, 'profileData.json'), formattedDataJson);
        fs.writeFileSync(path.join(outputDir, 'profileData.xml'), formattedDataXml);

        console.log('Formatted data saved to files.');
    });

    it(`FIN-HRMS-007: should perform logout in HRMS`, async () => {
        allureReporter.addStory('LogOut Function');

        await sideBar.clickWorkFromHome();

        await browser.pause(3000);
    });
});
