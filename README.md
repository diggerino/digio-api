digio-api
=========

## Installation
```
npm install digio-api
```

## Examples
```javascript
var api = require('digio-api')('<access_token>')

api.droplets.list(function (err, data) {
  console.log('Droplets: ', data);
})
```
