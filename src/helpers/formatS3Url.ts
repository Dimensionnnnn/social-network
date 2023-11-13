import {URL} from 'react-native-url-polyfill';

export const formatS3Url = (link?: string) => {
  if (link) {
    const url = new URL(link);
    const baseUrl = `${url.protocol}//${url.host}${url.pathname}`;
    return baseUrl;
  }
};
