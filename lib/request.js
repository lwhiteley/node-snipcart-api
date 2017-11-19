const Axios = require('axios');
const merge = require('lodash/merge');
const format = require('string-template');

const config = require('./config');

const self = {};
const apiKey = config.get('SECRET_API_KEY');
const headers = config.get('headers');
const baseURL = config.get('url');

const axios = Axios.create({
  baseURL,
  headers,
  auth: {
    username: apiKey,
    password: '',
  },
});

self.makeRequest = function makeRequest(options = {}) {
  const reqOpts = merge(this.opts, options);
  const urlParams = reqOpts.urlParams || {};
  reqOpts.url = format(reqOpts.url, urlParams);
  return axios(reqOpts);
};

module.exports = self;
