const forEach = require('lodash/forEach');
const get = require('lodash/get');
const set = require('lodash/set');

const apiDefinition = require('./methods');
const request = require('../request');

let api = {};

const buildApi = () => {
  forEach(apiDefinition, (definition, method) => {
    forEach(definition.endpoints, (endpoint) => {
      const jsonPath = `${method}.${endpoint.function}`;
      const opts = endpoint;
      const path = get(endpoint, 'path', '');
      opts.url = `${definition.basePath}${path}`;
      opts.jsonPath = jsonPath;

      if (process.env.LIST_METHODS) {
        console.log(`api.${jsonPath}`); // eslint-disable-line no-console
      }

      set(api, jsonPath, request.makeRequest.bind({ opts }));
    });
  });

  return api;
};

api = buildApi();

module.exports = api;
