import * as fs from 'fs';


async function getElementTextByIndex(tdIndex: number, trIndex: number): Promise<string> {
    // Replace with your actual XPath selector, incorporating the index
    const element = $(`//tbody/tr[${tdIndex}]/td[${trIndex}]`);
    if (await element.isDisplayed()) {
        return element.getText();
    } else {
        throw new Error(`Element at index ${trIndex} and ${trIndex} is not displayed.`);
    }
}

export async function collectTextsFromElements(tdIndex: number, trIndex: number): Promise<string[]> {
    const texts: string[] = []; // Initialize the array to store text values

    let i = tdIndex;
    let j = trIndex;

    while (true) {
        try {
            const text = await getElementTextByIndex(i, j);
            texts.push(text); // Add text to the array
            i++;
        } catch (error) {
            // Stop collecting if an error is caught (e.g., element not found)
            break;
        }
    }
    return texts; // Return the collected array of texts
}



export async function saveDataToCSV(data: LeaveRequest[], filePath: string) {
    const header = 'Your Leave Request';
    const rows = data.map(request => [
        request.leaveType,
        request.appliedLeave,
        request.status
    ].join(','));

    fs.writeFileSync(filePath, [header, ...rows].join('\n'));
    console.log('CSV rows:', rows);

    return rows;
}
