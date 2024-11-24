require('dotenv').config();
const axios = require('axios');

const API_KEY = process.env.CLICKUP_API_KEY;

const clickUpAPI = axios.create({
  baseURL: 'https://api.clickup.com/api/v2',
  headers: {
    Authorization: API_KEY,
  },
});

module.exports = clickUpAPI;
