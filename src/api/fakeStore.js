import axios from 'axios';

const API_BASE = 'https://fakestoreapi.com';

export const getProducts = () => axios.get(`${API_BASE}/products`);
export const getProductById = (id) => axios.get(`${API_BASE}/products/${id}`);
