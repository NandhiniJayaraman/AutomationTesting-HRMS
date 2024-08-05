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

export async function getEnvVar(key: string): Promise<string> {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Environment variable ${key} is not defined`);
    }
    return value;
}