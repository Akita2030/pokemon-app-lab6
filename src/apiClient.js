import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2', // базовый URL API
  timeout: 10000, // время ожидания 10 секунд
});

export default apiClient;
