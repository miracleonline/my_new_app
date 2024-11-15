// src/api.js
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',  
});

// Interceptor to add the token to requests
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// API endpoints
export const signUp = (data) => api.post('/auth/signup', data);
export const login = (data) => api.post('/auth/login', data);
export const getCoins = () => api.get('/coins');
export const earnCoins = (data) => api.post('/coins/earn', data);
export const spendCoins = (data) => api.post('/coins/spend', data);
export const shareLocation = (data) => api.post('/location/share', data);
