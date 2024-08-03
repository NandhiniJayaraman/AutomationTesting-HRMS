import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';


export default class DataHandler {




    async getTestData(leaveCount1: string[], leaveType1: string[], status1: string[]): Promise<{ leaveCount: string[], leaveType: string[], status: string[] }> {
        const leaveCount = leaveCount1
        const leaveType = leaveType1
        const status = status1

        return { leaveCount, leaveType, status };
    }

    async writeDataToFile(leaveCount1: string[], leaveType1: string[], status1: string[]) {

        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        const { leaveCount, leaveType, status } = await this.getTestData(leaveCount1, leaveType1, status1);
        const data = { leaveCount, leaveType, status };

        const filePath = path.join(__dirname, 'chartdata.json');
        fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
    }

}
