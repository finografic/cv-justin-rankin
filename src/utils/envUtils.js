import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const envFile = dotenv.config({ path: '../.env' });
dotenvExpand(envFile);

export const getReactAppEnv = () => {
  const envProps = {};
  for (const [key, value] of Object.entries(process.env)) {
    const isReactAppVar = /REACT_APP_/.test(key);
    isReactAppVar && Object.assign(envProps, { [key.replace('REACT_APP_', '')]: value });
  }
  return envProps;
};

// =========================================== //

function base64ToPlaintext(input) {
  return Buffer.from(input || '', 'base64').toString();
}

// =========================================== //

const envFileParsed = envFile.parsed;

export const ENV = {
  ...envFileParsed,
  ...getReactAppEnv(),
};
