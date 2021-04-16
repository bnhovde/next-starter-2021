import Cookies from 'cookies';
import { NextApiRequest, NextApiResponse } from 'next';
import decodeJwt from 'utilities/decodeJwt';

function setCookie(
  req: NextApiRequest,
  res: NextApiResponse,
  token: string,
  refreshToken: string
): void {
  const cookies = new Cookies(req, res);
  const tokens = `${token}___${refreshToken}`;
  const jwt = decodeJwt(token);
  const exp = refreshToken.substring(64);
  const cookieExpiry = new Date(Number(exp) * 1000);
  const tokenExpiry = new Date(0);
  tokenExpiry.setUTCSeconds(Number(jwt.exp));

  cookies.set('@@appname-cookie', tokens, { expires: cookieExpiry });
  cookies.set('@@appname-logged-in', tokenExpiry.toUTCString(), {
    httpOnly: false,
    expires: cookieExpiry,
  });

  req.headers['TEMP_COOKIE'] = tokens;
}

type ReturnData = {
  accessToken?: string;
  refreshToken?: string;
};

function getCookie(req: NextApiRequest, res: NextApiResponse): ReturnData {
  // Check if we've got a new session
  if (req.headers['TEMP_COOKIE']) {
    const tokens = `${req.headers['TEMP_COOKIE']}`.split('___') || ['', ''];
    return {
      accessToken: tokens[0],
      refreshToken: tokens[1],
    };
  }

  const cookies = new Cookies(req, res);
  const cookieData = cookies.get('@@appname-cookie') || '';
  const tokens = cookieData.split('___') || ['', ''];

  return {
    accessToken: tokens[0],
    refreshToken: tokens[1],
  };
}

function clearCookie(req: NextApiRequest, res: NextApiResponse): void {
  const cookies = new Cookies(req, res);
  cookies.set('@@appname-cookie');
  cookies.set('@@appname-logged-in');
}

export { setCookie, getCookie, clearCookie };
