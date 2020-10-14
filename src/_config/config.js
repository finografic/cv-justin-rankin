import { ENV } from 'utils/envUtils';
const { HOST, PORT } = ENV;

const appName = 'CV / Curriculum Vitae :: Justin Blair Rankin';
export const pageTitles = {
  appName,
  pageTitleSuffix: ` - ${appName}`,
};

export const company = {
  name: 'Some Company',
  logoURL: 'http:/www.test.com/assets/img/logo.png',
};

export { routes } from './routes';
