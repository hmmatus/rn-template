import {AxiosHeaders} from 'axios';
import {instance} from './api';

export const service = {
  get: (url: string, headers?: AxiosHeaders) =>
    instance
      .get(url, {headers})
      .then(res => {
        return res.data;
      })
      .catch(err => {
        throw new Error(err);
      }),
  post: (url: string, data: unknown, headers?: AxiosHeaders) =>
    instance
      .post(url, data, {headers})
      .then(res => {
        return res.data;
      })
      .catch(err => {
        throw new Error(err);
      }),
  put: (url: string, data: unknown, headers?: AxiosHeaders) => {
    instance
      .put(url, data, {headers})
      .then(res => {
        return res.data;
      })
      .catch(err => {
        throw new Error(err);
      });
  },
  delete: (url: string, headers?: AxiosHeaders) => {
    instance
      .delete(url, {headers})
      .then(res => {
        return res.data;
      })
      .catch(err => {
        throw new Error(err);
      });
  },
};
