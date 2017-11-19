const config = {
  url: 'https://app.snipcart.com/api',
  SECRET_API_KEY: process.env.SECRET_API_KEY,
  headers: {
    Accept: 'application/json',
    'Content-Type':	'application/json',
  },
};

const self = {
  set: (key, value) => {
    config[key] = value;
    return this;
  },
  get: (key) => {
    return config[key];
  },
};

module.exports = self;
