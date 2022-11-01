// Package import
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_URL,
});

export default api;
