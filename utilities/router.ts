import { NextRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

const getParams = (router: NextRouter, param: string): string[] => {
  if (!router.query) {
    return [];
  }

  const match = router.query[param];

  if (Array.isArray(match)) {
    return match;
  }

  return match ? [match] : [];
};

const getSingleParam = (router: NextRouter, param: string): string => {
  const match = getParams(router, param);

  return match.length ? match[0] : '';
};

type FilteredParams = { [key: string]: string | string[] | undefined };

const excludeParams = (router: NextRouter, paramsToExclude: string[]): FilteredParams => {
  if (!router.query) {
    return {};
  }

  const queryCopy = { ...router.query };

  for (const key of Object.keys(router.query)) {
    if (paramsToExclude.includes(key)) {
      delete queryCopy[key];
    }
  }

  return queryCopy;
};

const stringifyQuery = (query: ParsedUrlQuery): string => {
  if (!query) {
    return '';
  }

  const sortedQuery = Object.keys(query)
    .sort()
    .reduce((acc, key) => {
      let valueArray = query[key] || '';
      if (!Array.isArray(valueArray)) {
        valueArray = [valueArray];
      }

      return {
        ...acc,
        [key]: valueArray.sort(),
      };
    }, {});

  return JSON.stringify(sortedQuery);
};

export { getParams, getSingleParam, excludeParams, stringifyQuery };
