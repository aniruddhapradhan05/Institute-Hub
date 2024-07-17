import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks/';

const createTask = (title, description, assignedTo, deadline, status) => {
  return axios.post(API_URL, {
    title,
    description,
    assignedTo,
    deadline,
    status,
  });
};

const getTasks = () => {
  return axios.get(API_URL);
};

export default {
  createTask,
  getTasks,
};
