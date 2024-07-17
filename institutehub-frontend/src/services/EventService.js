import axios from 'axios';

const API_URL = 'http://localhost:5000/api/events/';

const createEvent = (title, date, description, location, resources) => {
  return axios.post(API_URL, {
    title,
    date,
    description,
    location,
    resources,
  });
};

const getEvents = () => {
  return axios.get(API_URL);
};

export default {
  createEvent,
  getEvents,
};
