import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import XLSX from 'xlsx';

// ES Module equivalent of __dirname
export class excractDataFromExcel {
    async excractdata() {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        // Adjust the path to your Excel file
        const excelFilePath = path.join(__dirname, '../data.xlsx'); // Update this path

        const outputJsonPath = path.join(__dirname, 'testData/data.json'); // Adjust if necessary

        // Read the Excel file
        const workbook = XLSX.readFile(excelFilePath);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        // Ensure the keys match your TypeScript interface
        const formattedData = jsonData.map((item: any) => ({
            Username: item.UserName, // Assuming the Excel file has a column named "UserName"
            Password: item.Password,
            Date: item.Date,
            reason: item.Reason
        }));

        fs.writeFileSync(outputJsonPath, JSON.stringify(formattedData, null, 2));

        console.log(`Excel data converted to JSON and saved to ${outputJsonPath}`);

    }
}

