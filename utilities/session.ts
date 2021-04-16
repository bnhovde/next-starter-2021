import Cookies from 'cookies';
import { NextApiRequest, NextApiResponse } from 'next';

function setSession(req: NextApiRequest, res: NextApiResponse, sessionId: string): void {
  const cookies = new Cookies(req, res);

  cookies.set('@@appname-session', sessionId);
  req.headers['TEMP_SESSION'] = sessionId;
}

type ReturnData = {
  sessionId?: string;
};

function getSession(req: NextApiRequest, res: NextApiResponse): ReturnData {
  // Check if we've got a new session
  if (req.headers['TEMP_SESSION']) {
    return {
      sessionId: `${req.headers['TEMP_SESSION']}`,
    };
  }

  const cookies = new Cookies(req, res);
  const cookieData = cookies.get('@@appname-session') || '';

  return {
    sessionId: cookieData,
  };
}

function clearSession(req: NextApiRequest, res: NextApiResponse): void {
  const cookies = new Cookies(req, res);
  cookies.set('@@appname-session');
}

export { setSession, getSession, clearSession };
