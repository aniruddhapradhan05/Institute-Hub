import axios from 'axios';

const API_URL = 'http://localhost:5000/api/resources/';

const createResource = (name, type, quantity) => {
  return axios.post(API_URL, {
    name,
    type,
    quantity,
  });
};

const getResources = () => {
  return axios.get(API_URL);
};

export default {
  createResource,
  getResources,
};
