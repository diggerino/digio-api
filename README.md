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

api.domains.create('example.com', '127.0.0.1')
    .do(function (err, data) {
        if (err) return console.error('Error: ' + err.message)
        console.log('Success: ' + data.domain.name + ' created.')
    })
```

## Methods

For detailed description and requirements of the function arguments, see the official
DigitalOcean API v2.0 documentation at https://developers.digitalocean.com/

All modules and their methods are organized in a way that each method requires
arguments matching the required fields in the API documentation. Subsequent optional
arguments, filters and pagination support is possible by method chaning.

No action is taken before the `do(callback)` method is invoked.

#### Pagination example

The following example fetches a list of all user droplets, viewing page 2 while constricting the amount of droplets per page to 10.

```javascript
api.droplets.list()
    .page(2)
    .per_page(10)
    .do(function (err, data) {
        if (err) return console.log(err)
        // Do stuff with data
    })
```

#### Filters example

The following example applies filters to the list of images. The `type()` sets the filter to either distribution or application (as specified in the API documentation). The `private()` method, if set to true, will only retrieve images belonging to the user.

```javascript
api.images.list()
    .type('distribution')
    .private(true)
    .do(function (err, data) {
        if (err) return console.log(err)
        // Do stuff with data
    })
```

### Complete API set

Optional arguments and configuration methods are indented below their respective main endpoint. All list requests support pagination and per page constraints.

```javascript
actions.get(<action_id>)
actions.list()

domains.create(<domain>, <ip>)
domains.delete(<domain>)
domains.get(<domain>)
domains.list()
domains.create_record(<domain>, <type>)
    .name(<name>)
    .data(<data>)
    .priority(<pri>)
    .port(<port>)
    .weight(<weight>)
domains.delete_record(<domain>, <record>)
domains.get_record(<domain>, <record>)
domains.list_records(<domain>)
domains.update_record(<domain>, <record>)
    .type(<type>)
    .name(<name>)
    .data(<data>)
    .priority(<pri>)
    .port(<port>)
    .weight(<weight>)

droplets.create(<name>, <region>, <size>, <image>)
    .ssh_keys(<ssh_keys>)
    .backups(<boolean>)
    .ipv6(<boolean>)
    .private_networking(<boolean>)
    .user_data(<user_data>)
droplets.delete(<droplet_id>)
droplets.get(<droplet_id>)
droplets.list()
droplets.list_droplet_actions(<droplet_id>)
droplets.list_droplet_kernels(<droplet_id>)
droplets.list_droplet_backups(<droplet_id>)
droplets.list_droplet_snapshots(<droplet_id>)
droplets.change_kernel(<droplet_id>, <kernel_id>)
droplets.disable_backups(<droplet_id>)
droplets.enable_ipv6(<droplet_id>)
droplets.enable_priv_net(<droplet_id>)
droplets.get_droplet_action(<droplet_id>, <action_id>)
droplets.password_reset(<droplet_id>)
droplets.power_cycle(<droplet_id>)
droplets.power_off(<droplet_id>)
droplets.power_on(<droplet_id>)
droplets.reboot(<droplet_id>)
droplets.rebuild(<droplet_id>, <image_id>)
droplets.rename(<droplet_id>, <new_name>)
droplets.resize(<droplet_id>, <new_size>)
droplets.restore(<droplet_id>, <image_id>)
droplets.shutdown(<droplet_id>)
droplets.snapshot(<droplet_id>, <name>)

extras.rate()   // Returns a custom object with RateLimit information

images.delete(<image_id>)
images.get(<image_id>)
images.get_action(<image_id>, <action_id>)
images.list()
    .type(<type>)
    .private(<boolean>)
images.transfer(<image_id>, <region>)
images.update(<image_id>, <name>)

keys.create(<name>, <public_key>)
keys.delete(<key_id/fingerprint>)
keys.get(<key_id/fingerprint>)
keys.list()
keys.update(<key_id/fingerprint>, <new_name>)

regions.list()

sizes.list()
```

## Changelog

#### 1.0.0
* Refactored entire module library to support easier handling of optional arguments, pagination and newly added filters.
* Pagination support
* Filter support
* Added droplet neighbour endpoints
* Added upgrade endpoint for droplets

#### 0.1.8
* Fix: Support API returning undefined body on Droplet Destroy, https://github.com/tmn/digio-api/pull/2

[View past release notes](https://github.com/tmn/digio-api/wiki/Release-notes)

## Licence

The MIT License (MIT)

Copyright (c) 2014 [Tri M. Nguyen](http://tmn.io) & [Aleksander Skraastad](https://overflow.no)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
