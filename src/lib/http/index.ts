import { getToken } from '@/service/AuthService';
import axios from 'axios';
import { clearStorageData } from '@/lib/storage';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(async (config) => {
   // Do something before request is sent 
   //If the header does not contain the token and the url not public, redirect to login  
   if (config.method !== 'OPTIONS') {
      config.headers["Content-Type"] = 'application/json';
      let token = getToken();
      if (token) {
         config.headers['auth-token'] = token;
      }
   }
   return config;
}, function (error) {
   // Do something with request error 
   return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
   response => response,
   (error) => {
      if(error.response && error.response.status === 401) {
         clearStorageData();
         window.location.href = '/login';
         return Promise.reject(error);
      } else {
         return Promise.reject(error);
      }
   } 
)

export default axiosInstance;