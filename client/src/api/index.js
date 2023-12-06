import axios from 'axios';

const url = 'http://localhost:5000/api';

const API = axios.create({ baseUrl: 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const signUp = (formData) => axios.post(`${url}/auth/signup`, formData);
export const signIn = (formData) => axios.post(`${url}/auth/signin`, formData);

// USERS
export const fetchUsers = () => axios.get(`${url}/users`);
export const fetchUser = (id) => axios.get(`${url}/users/${id}`);
export const updateUser = (id, post) => axios.patch(`${url}/users/${id}`, post);
export const deleteUser = (id) => axios.delete(`${url}/users/${id}`);
export const fetchOwner = () => axios.get(`${url}/owner`);
