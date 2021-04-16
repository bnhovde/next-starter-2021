import { NextApiRequest, NextApiResponse } from 'next';

const runApiMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  func: (req: NextApiRequest, res: NextApiResponse, next: (result: unknown) => void) => unknown
): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    func(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
};

export default runApiMiddleware;
