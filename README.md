# node-snipcart-api

implementation of the snipcart api

[![npm version](https://badge.fury.io/js/snipcart-api.svg)](https://badge.fury.io/js/snipcart-api)

## Install

```bash
npm i --save snipcart-api
```

## Configuration

The api requires a [Secret API Key](https://docs.snipcart.com/merchant-dashboard/account-configurations#2-api-keys).
This can be set by using an environment variable `SECRET_API_KEY`

OR

```js
const snipcart = require('snipcart-api');
snipcart.configure('SECRET_API_KEY', SECRET_API_KEY);
```

## Making API Calls

Once the `Secret API Key` is set, you may go ahead and make api calls

### Implemented Methods

```
api.orders.getAll
api.orders.getOne
api.orders.update

api.discounts.getAll
api.discounts.getOne
api.discounts.update
api.discounts.create

api.subscriptions.getAll
api.subscriptions.getOne
api.subscriptions.invoices
api.subscriptions.pause
api.subscriptions.resume
api.subscriptions.cancel

api.notifications.getAll
api.notifications.create

api.refunds.getAll
api.refunds.getOne
api.refunds.create

api.customers.getAll
api.customers.getOne
api.customers.orders

api.userSessions.getOne

api.products.getAll
api.products.getOne
api.products.create
api.products.update

api.abandonedCarts.getAll
api.abandonedCarts.getOne

api.domains.getDefaultDomain
api.domains.updateDefaultDomain
api.domains.getAllowedDomains
api.domains.createAllowedDomains
api.domains.deleteAllowedDomains

api.shippingMethods.getAll
api.shippingMethods.getOne
api.shippingMethods.update
api.shippingMethods.deleteOne
api.shippingMethods.create
```

All Methods accept a single param (`options` *{Object}*).


### Request Options

|Property|Description|
|:--|:--|
|urlParams {Object}| Holds keys that may replace url paramaters that may need an `id` or `token`<br> <br> for eg. `{id: '1234'}`<br> <br> To know which methods need url parameters please view the [api definition](lib/api/methods/index.js)|
|params {Object}|This is an object map of all query parameters that you wish to send with the request <br> <br> for eg. `{limit:50, offset:0, status:'Active'}`|
|data {Object}| the body of the request, usually used for PUT and POST requests|


eg.

```js
const snipcart = require('snipcart-api');
snipcart.api.refunds
    .getOne({
        urlParams: {
            id: '2223490d-84c1-480c-b713-50cb0b819313',
            token: '4243490d-87c1-480e-b413-51db0b419313',
        }
    })
    .then((response) => {
        console.log('success');
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
    })
    .catch((error) => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            console.error('Error', error.message);
        }
    });
```

## Notes

- Pull requests are welcome.

