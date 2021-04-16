import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const now = new Date();

    res.json(now);
  } catch (error) {
    res.status(500).send(error);
  }
};
