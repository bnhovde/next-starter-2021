import { NextApiRequest, NextApiResponse } from 'next';

import decodeJwt from 'utilities/decodeJwt';
import { getCookie, setCookie, clearCookie } from 'utilities/cookie';

const refreshUrl = `${process.env.API_URL}/auth/refresh`;

/**
 * Global AUTH middleware
 * @description - Wraps all API routes that requires either a JWT or a Session-id
 * -> 1: If no JWT OR Session, Create session cookie
 * -> 2: If valid JWT, clear session cookie
 * -> 3: If JWT token expired, refresh
 * -> 4: If refresh token expired, return 401
 */
function authMiddleware() {
  return async (
    req: NextApiRequest,
    res: NextApiResponse,
    next: (result?: unknown) => void
  ): Promise<unknown> => {
    // Get cookie data
    const cookieData = getCookie(req, res);

    // Check if no JWT exists
    if (!(cookieData.accessToken || '')) {
      return next();
    }

    const jwtData = decodeJwt(cookieData.accessToken || '');

    // Check if JWT has expired
    const jwtExpired = Date.now() >= Number(jwtData.exp) * 1000;

    // If JWT OK, ensure no session and abort further actions
    if (!jwtExpired) {
      return next();
    }

    // JWT has expired
    const refreshTokenExp = (cookieData.refreshToken || '').substring(64);
    const refreshTokenExpired = Date.now() >= Number(refreshTokenExp) * 1000;

    if (refreshTokenExpired) {
      clearCookie(req, res);
      return res.status(401).send('Session expired');
    }

    const postData = {
      accessToken: cookieData.accessToken,
      refreshToken: cookieData.refreshToken,
    };

    const response = await fetch(refreshUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      const results = await response.json();

      // Bake new cookie 🍪
      setCookie(req, res, results.accessToken, results.refreshToken);
    } else {
      clearCookie(req, res);
      return res.status(401).send('Session expired and could not be refreshed');
    }

    return next();
  };
}

export default authMiddleware;
