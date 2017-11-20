module.exports = {
  orders: {
    basePath: '/orders',
    endpoints: [
      {
        function: 'getAll',
        method: 'GET',
      },
      {
        function: 'getOne',
        method: 'GET',
        path: '/{token}',
      },
      {
        function: 'update',
        method: 'PUT',
        path: '/{token}',
      },
    ],
  },
  discounts: {
    basePath: '/discounts',
    endpoints: [
      {
        function: 'getAll',
        method: 'GET',
      },
      {
        function: 'getOne',
        method: 'GET',
        path: '/{id}',
      },
      {
        function: 'update',
        method: 'PUT',
        path: '/{id}',
      },
      {
        function: 'create',
        method: 'POST',
      },
    ],
  },
  subscriptions: {
    basePath: '/subscriptions',
    docs: 'https://docs.snipcart.com/api-reference/subscriptions',
    endpoints: [
      {
        function: 'getAll',
        method: 'GET',
      },
      {
        function: 'getOne',
        method: 'GET',
        path: '/{id}',
      },
      {
        function: 'invoices',
        method: 'GET',
        path: '/{id}/invoices',
      },
      {
        function: 'pause',
        method: 'POST',
        path: '/{id}/pause',
      },
      {
        function: 'resume',
        method: 'POST',
        path: '/{id}/resume',
      },
      {
        function: 'cancel',
        method: 'DELETE',
        path: '/{id}',
      },
    ],
  },
  notifications: {
    basePath: '/orders/{token}/notifications',
    endpoints: [
      {
        function: 'getAll',
        method: 'GET',
      },
      {
        function: 'create',
        method: 'POST',
      },
    ],
  },
  refunds: {
    basePath: '/v1/orders/{token}/refunds',
    docs: 'https://docs.snipcart.com/api-reference/refunds',
    endpoints: [
      {
        function: 'getAll',
        method: 'GET',
      },
      {
        function: 'getOne',
        method: 'GET',
        path: '/{id}',
      },
      {
        function: 'create',
        method: 'POST',
      },
    ],
  },
  customers: {
    basePath: '/customers',
    docs: 'https://docs.snipcart.com/api-reference/customers',
    endpoints: [
      {
        function: 'getAll',
        method: 'GET',
      },
      {
        function: 'getOne',
        method: 'GET',
        path: '/{id}',
      },
      {
        function: 'orders',
        method: 'GET',
        path: '/{id}/orders',
      },
    ],
  },
  userSessions: {
    basePath: '/usersessions',
    docs: 'https://docs.snipcart.com/api-reference/usersessions',
    endpoints: [
      {
        function: 'getOne',
        method: 'GET',
        path: '/{token}',
      },
    ],
  },
  products: {
    basePath: '/products',
    docs: 'https://docs.snipcart.com/api-reference/products',
    endpoints: [
      {
        function: 'getAll',
        method: 'GET',
      },
      {
        function: 'getOne',
        method: 'GET',
        path: '/{id}',
      },
      {
        function: 'create',
        method: 'POST',
      },
      {
        function: 'update',
        method: 'PUT',
        path: '/{id}',
      },
    ],
  },
  abandonedCarts: {
    basePath: '/carts/abandoned',
    docs: 'https://docs.snipcart.com/api-reference/abandoned-carts',
    endpoints: [
      {
        function: 'getAll',
        method: 'GET',
      },
      {
        function: 'getOne',
        method: 'GET',
        path: '/{token}',
      },
    ],
  },
  domains: {
    basePath: '/settings ',
    docs: 'https://docs.snipcart.com/api-reference/domains',
    endpoints: [
      {
        function: 'getDefaultDomain',
        method: 'GET',
        path: '/domain',
      },
      {
        function: 'updateDefaultDomain',
        method: 'PUT',
        path: '/domain',
      },
      {
        function: 'getAllowedDomains',
        method: 'GET',
        path: '/alloweddomains',
      },
      {
        function: 'createAllowedDomains',
        method: 'POST',
        path: '/alloweddomains',
      },
      {
        function: 'deleteAllowedDomains',
        method: 'DELETE',
        path: '/alloweddomains',
      },
    ],
  },
  shippingMethods: {
    basePath: '/shipping_methods',
    docs: 'https://docs.snipcart.com/api-reference/custom-shipping-methods',
    endpoints: [
      {
        function: 'getAll',
        method: 'GET',
      },
      {
        function: 'getOne',
        method: 'GET',
        path: '/{id}',
      },
      {
        function: 'update',
        method: 'PUT',
        path: '/{id}',
      },
      {
        function: 'deleteOne',
        method: 'DELETE',
        path: '/{id}',
      },
      {
        function: 'create',
        method: 'POST',
      },
    ],
  },
};
