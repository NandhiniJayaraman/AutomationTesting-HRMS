import { addStep } from "@wdio/allure-reporter";




export async function addCustomStep(actual: any, expected: any, stepDescription: string): Promise<void> {
    try {
        expect(actual).toBe(expected);
        addStep(`${stepDescription}: Passed`);
    }
    catch (error) {
        addStep(`${stepDescription}: Failed `);
        throw error;
    }
}