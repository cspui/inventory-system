import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

const fsp = require('fs').promises;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      try {
        const body = JSON.parse(req.body);
        const updateList = {
          record: body,
        };
        fsp.writeFile(
          path.join(process.cwd(), 'src/pages/api/data.json'),
          JSON.stringify(updateList)
        );

        res.status(200).json(body);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error writing data' + error });
      }
      return;
    case 'GET':
    default:
      try {
        const file_data = await fsp.readFile(path.join(process.cwd(), 'src/pages/api/data.json'));
        const json_data = JSON.parse(file_data);
        res.status(200).json(json_data.record);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error reading data' + error });
      }
      return;
  }
}
