import INTL from 'constants/intl';

const getTranslation = (domain: string, key: string, lang?: string): string => {
  return INTL?.[domain]?.[key]?.[lang || 'en'];
};

export default getTranslation;
