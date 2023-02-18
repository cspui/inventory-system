import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

const fsp = require('fs').promises;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const file_data = await fsp.readFile(path.join(process.cwd(), 'src/pages/api/data.json'));
    const json_data = JSON.parse(file_data);
    const updateList = {
      record: [...json_data.record, req.body],
    };

    console.log('updateList', updateList);
    fsp.writeFile(path.join(process.cwd(), 'src/pages/api/data.json'), JSON.stringify(updateList));
    res.status(200).json(updateList.record);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error writing data' + error });
  }
}
