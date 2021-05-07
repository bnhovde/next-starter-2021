import Router from 'next/router';
import { getExpiry } from 'utilities/clientCookie';

import { ApiError, ReturnType } from 'types';

const url = '/api';

/**
 * Errors
 */

const errors: { [key: number]: string } = {
  400: 'Noe gikk galt',
  401: 'Ikke autorisert',
  403: 'Ikke tilgang',
  404: 'Ikke funnet',
  500: 'Noe gikk galt',
};

/**
 * Handle response
 */

async function handleResponse<T>(response: Response): Promise<ReturnType<T>> {
  let data;

  const contentType = response.headers.get('content-type');

  if (contentType?.includes('application/json')) {
    try {
      data = await response.json();
    } catch (error) {
      console.log('failed parsing json', error);
    }
  } else {
    try {
      data = await response.text();
    } catch (error) {
      console.log('failed parsing text', error);
    }
  }

  if (response.ok) {
    return { data: data as T, error: undefined };
  } else {
    const dataError = data as ApiError;
    const errorMessages = dataError?.errors;

    // Check for unauthorized response (refreshtoken expired during session)
    if (response.status === 401 && process.browser) {
      Router.push('/logg-ut');
    }

    return {
      data: undefined,
      error: {
        code: response.status,
        message: errors[response.status],
        errors: errorMessages,
      },
    };
  }
}

/**
 * Queue system
 */

let refreshQueue: Promise<void> | null = null;

const refreshChecker = async () => {
  return new Promise((resolve) => {
    // Determine if token needs refreshing
    const cookieExpiry = getExpiry();
    if (!cookieExpiry) {
      return resolve({ success: true });
    }

    const isExpired = new Date() > new Date(cookieExpiry);
    if (!isExpired) {
      return resolve({ success: true });
    }

    // Token has expired, request new or add to queue
    if (refreshQueue) {
      return refreshQueue.then(() => {
        resolve({ success: true });
        refreshQueue = null;
      });
    }

    // We need to create a new request
    let baseUrl = '/api';
    if (!process.browser) {
      baseUrl = process.env.API_URL || '';
    }

    const refreshUrl = baseUrl + '/auth/refresh';
    const request = fetch(refreshUrl).then(() => {
      refreshQueue = null;
      return resolve({ success: true });
    });

    refreshQueue = request;
  });
};

/**
 * Methods
 */

async function getWithAuth<T>(path = '') {
  await refreshChecker();
  return get<T>(path);
}

async function get<T>(path = '') {
  let baseUrl = '';

  if (!process.browser) {
    baseUrl = process.env.API_URL || '';
  }

  const url = baseUrl + path;
  const response = await fetch(url, {
    method: 'GET',
    credentials: 'same-origin',
  });

  return handleResponse<T>(response);
}

async function postWithAuth<T>(url = '', data = {}, abortSignal?: AbortSignal) {
  await refreshChecker();
  return post<T>(url, data, abortSignal);
}

async function post<T>(url = '', data = {}, abortSignal?: AbortSignal) {
  await refreshChecker();

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    signal: abortSignal,
  });

  return handleResponse<T>(response);
}

/**
 * Auth API
 */

export const signup = (user: CreateUser): ReturnType<string> =>
  post(`${url}/user/create`, user);

export const login = (phone: string, code: string): ReturnType<string> =>
  post<string>(`${url}/auth/login`, { phone, code });

export const logout = (): ReturnType<Response> => post<Response>(`${url}/auth/logout`);

export const refresh = (): ReturnType<Response> => post<Response>(`${url}/auth/refresh`);


/**
 * General API
 */


export const getNow = (): ReturnType<string> => getWithAuth<string>(`${url}/utils/now`);
