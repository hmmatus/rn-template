import {API_URL} from '@env';
import axios, {AxiosHeaders} from 'axios';
export const instance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});
