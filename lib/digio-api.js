var request = require('request')

var digio_api = function (token) {
  var API_URL = 'https://api.digitalocean.com/v2/'

  var digio_headers = {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json'
  }

  var tools = {
    _get: function (action, callback) {
      request({
        url: API_URL + action,
        headers: digio_headers
      },
      function (err, res, body) {
        if (err) return callback(err)
        if (res.statusCode >= 400) return callback(JSON.parse(body), body)

        callback(null, body || {})
      })
    },

    _post: function (action, body, callback) {
      request.post({
        url: API_URL + action,
        headers: digio_headers,
        body: JSON.stringify(body)
      },
      function (err, res, body) {
        if (err) return callback(err)
        if (res.statusCode >= 400) return callback(JSON.parse(body), body)

        callback(null, body || {})
      })
    },

    _delete: function (action, callback) {
      request.del({
        url: API_URL + action,
        headers: digio_headers
      },
      function (err, res, body) {
        if (err) return callback(err)
        if (res.statusCode >= 400) return callback(JSON.parse(body), body)

        callback(null, body || {})
      })
    },

    _put: function (action, body, callback) {
      request.put({
        url: API_URL + action,
        headers: digio_headers,
        body: JSON.stringify(body)
      },
      function (err, res, body) {
        if (err) return callback(err)
        if (res.statusCode >= 400) return callback(JSON.parse(body), body)

        callback(null, body || {})
      })
    }
  }

  return {
    droplets: require('./modules/droplets')(tools),
    domains: require('./modules/domains')(tools),
    domain_records: require('./modules/domain-records')(tools),
    regions: require('./modules/regions')(tools),
    sizes: require('./modules/sizes')(tools),
    keys: require('./modules/keys')(tools)
  }
}



module.exports = digio_api
