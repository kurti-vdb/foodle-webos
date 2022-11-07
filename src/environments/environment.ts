import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3099',
  spacesUrl: 'https://upsights.fra1.digitaloceanspaces.com/expense-tracker/avatars/',
  logLevel: NgxLoggerLevel.DEBUG,
  GoogleLoginProvider: '12950941723-egqo1u9p70fq38k29mj2bdgv9hjof0u7.apps.googleusercontent.com',
  FacebookLoginProvider: '1065904767592208',
  socketUri: "http://localhost:6666"
};
