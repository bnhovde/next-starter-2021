type intlValue = {
  [key: string]: string;
};

type intlDomain = {
  [key: string]: intlValue;
};

type intlObject = {
  [key: string]: intlDomain;
};

const intl: intlObject = {
  ERRORS: {
    RequestLogin: {
      en: 'An error occured',
      no: 'En feil oppsto',
    },
  },
};

export default intl;
