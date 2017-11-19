const axios = require('axios');
const merge = require('lodash/merge');
const format = require('string-template');

const config = require('./config');

const self = {};

self.makeRequest = function makeRequest(options = {}) {
  const apiKey = config.get('SECRET_API_KEY');
  const headers = config.get('headers');
  const baseURL = config.get('url');
  const reqOpts = merge(
    {
      baseURL,
      headers,
      auth: {
        username: apiKey,
        password: '',
      },
    },
    this.opts,
    options
  );

  const urlParams = reqOpts.urlParams || {};
  reqOpts.url = format(reqOpts.url, urlParams);
  return axios(reqOpts);
};

module.exports = self;
