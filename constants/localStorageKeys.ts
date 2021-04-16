import packageJson from '../package.json';

const localStorageKeys = {
  APP_VERSION: `@@appname-version-${packageJson.version}`,
};

export default localStorageKeys;
