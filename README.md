digio-api
=========

[![NPM module](https://img.shields.io/npm/v/digio-api.png)](https://www.npmjs.org/package/digio-api)

## Installation
```
npm install digio-api
```

## Examples
```javascript
var api = require('digio-api')('<access_token>')

api.droplets.list(function (err, data) {
  if (err) return console.error('Error: ' + err.message)
  console.log(data);
})
```

```javascript
var digio_api = require('digio-api')

var api = new digio_api('<access_token>')

api.domains.create('example.com', '127.0.0.1', function (err, data) {
  if (err) return console.error('Error: ' + err.message)
  console.log('Success: ' + data.domain.name + ' created.')
})
```

## Methods

For detailed description and requirements of the function arguments, see the official
DigitalOcean API v2.0 documentation at https://developers.digitalocean.com/

```javascript
actions.get(<action_id>, callback)
actions.list(callback)

domains.create(<domain>, <ip>, callback)
domains.delete(<domain>, callback)
domains.get(<domain>, callback)
domains.list(callback)
domains.create_record(<domain>, <ip>, <type>, callback)
domains.delete_record(<domain>, <record>, callback)
domains.get_record(<domain>, <record>, callback)
domains.list_records(<domain>, callback)
domains.update_record(<domain>, <record>, <new_name>, callback)

droplets.create(<name>, <region>, <size>, <image>, <ssh_keys>, <backups>, <ipv6>, <private_networking>, callback)
droplets.delete(<droplet_id>, callback)
droplets.get(<droplet_id>, callback)
droplets.list(callback)
droplets.list_droplet_actions(<droplet_id>, callback)
droplets.list_droplet_kernels(<droplet_id>, callback)
droplets.list_droplet_backups(<droplet_id>, callback)
droplets.list_droplet_snapshots(<droplet_id>, callback)
droplets.change_kernel(<droplet_id>, <kernel_id>, callback)
droplets.disable_backups(<droplet_id>, callback)
droplets.enable_ipv6(<droplet_id>, callback)
droplets.enable_priv_net(<droplet_id>, callback)
droplets.get_droplet_action(<droplet_id>, <action_id>, callback)
droplets.password_reset(<droplet_id>, callback)
droplets.power_cycle(<droplet_id>, callback)
droplets.power_off(<droplet_id>, callback)
droplets.power_on(<droplet_id>, callback)
droplets.reboot(<droplet_id>, callback)
droplets.rebuild(<droplet_id>, <image_id>, callback)
droplets.rename(<droplet_id>, <new_name>, callback)
droplets.resize(<droplet_id>, <new_size>, callback)
droplets.restore(<droplet_id>, <image_id>, callback)
droplets.shutdown(<droplet_id>, callback)
droplets.snapshot(<droplet_id>, <name>, callback)

extras.rate(callback)   // Returns a custom object with RateLimit information

images.delete(<image_id>, callback)
images.get(<image_id>, callback)
images.get_action(<image_id>, <action_id>, callback)
images.list(callback)
images.transfer(<image_id>, <region>, callback)
images.update(<image_id>, <name>, callback)

keys.create(<name>, <public_key>, callback)
keys.delete(<key_id/fingerprint>, callback)
keys.get(<key_id/fingerprint>, callback)
keys.list(callback)
keys.update(<key_id/fingerprint>, <new_name>, callback)

regions.list(callback)

sizes.list(callback)
```

## Changelog

#### 0.1.7
* Use request built in JSON parsing, https://github.com/tmn/digio-api/pull/1 - thanks ablankenship10

[View past release notes](https://github.com/tmn/digio-api/wiki/Release-notes)

## Licence

The MIT License (MIT)

Copyright (c) 2014 [Tri M. Nguyen](http://tmn.io) & [Aleksander Skraastad](https://overflow.no)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
