import type { NextApiRequest, NextApiResponse } from 'next';

import clientPromise from '@/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const collection = client.db('Inventory-system').collection('Stock');

  const bodyObject = req.body ? req.body : {};
  let response;

  switch (req.method) {
    case 'DELETE':
      response = await collection.deleteOne({ id: bodyObject.id });
      res.json(response);
      break;
    case 'PUT':
      response = await collection.updateOne(
        { id: bodyObject.id },
        {
          $set: {
            name: bodyObject.name,
            remark: bodyObject.remark,
            quantity: bodyObject.quantity,
            value: bodyObject.value,
            date: bodyObject.date,
          },
        }
      );
      res.json(response);
      break;
    case 'POST':
      response = await collection.insertOne(bodyObject);
      res.json(response);
      break;
    case 'GET':
      response = await collection.find({}).toArray();
      res.json({ status: 200, data: response });
      break;
  }
}
