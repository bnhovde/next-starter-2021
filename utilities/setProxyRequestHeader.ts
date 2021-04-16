import { NextApiRequest, NextApiResponse } from 'next';

function setProxyRequestHeader(header: string, value: string) {
  return (req: NextApiRequest, res: NextApiResponse, next: (result?: unknown) => void): void => {
    req.headers[header] = value;
    next();
  };
}

export default setProxyRequestHeader;
