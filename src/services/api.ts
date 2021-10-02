// #TODO: Deletar

import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { authorization: 'MEU-TREINADOR-TOKEN' },
});

export { api };
