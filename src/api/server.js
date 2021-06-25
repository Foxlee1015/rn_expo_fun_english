import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

let url;
if (__DEV__) {
  url = 'http://3.35.138.162:16980/api/';
} else {
  url = 'http://3.35.138.162:16980/api/';
}

const instance = axios.create({
  baseURL: url
});

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default instance;
