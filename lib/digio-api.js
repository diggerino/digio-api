var request = require('request')

var digio_api = function (token) {
  var API_URL = 'https://api.digitalocean.com/v2/'

  var digio_headers = {
    'Authorization': 'Bearer ' + token
  }

  var body_error = {
    id: 'invalid.response',
    message: 'API returned a non-json body'
  }

  var tools = {
    call: function (action, body, method, callback) {
      var options = {
        url: API_URL + action,
        headers: digio_headers,
        method: method || 'GET',
        json: body || true
      }

      request(options, function (err, res, body) {
        if (err) return callback(err)
        if (res.statusCode >= 400) return (typeof body !== 'object' ? callback(body_error, body) : callback(body))
        if (method == 'HEAD') return callback(null, res.headers)
        if (body === '') return callback(null, {})
        else if (typeof body !== 'object') return callback(body_error, body)
        else callback(null, body)
      })
    },

    _get: function (action, callback) {
      this.call(action, null, 'GET', callback)
    },

    _post: function (action, body, callback) {
      this.call(action, body, 'POST', callback)
    },

    _delete: function (action, callback) {
      this.call(action, null, 'DELETE', callback)
    },

    _put: function (action, body, callback) {
      this.call(action, body, 'PUT', callback)
    },

    _head: function (action, callback) {
      this.call(action, null, 'HEAD', callback)
    }
  }

  return {
    droplets: require('./modules/droplets')(tools),
    domains: require('./modules/domains')(tools),
    regions: require('./modules/regions')(tools),
    sizes: require('./modules/sizes')(tools),
    keys: require('./modules/keys')(tools),
    images: require('./modules/images')(tools),
    actions: require('./modules/actions')(tools),
    extras: require('./modules/extras')(tools)
  }
}



module.exports = digio_api
