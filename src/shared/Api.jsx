// Package import
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_URL,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});

export default api;
