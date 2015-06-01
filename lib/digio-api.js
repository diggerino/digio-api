var request = require('request')

/* Main API communication module */
var digio_api = function (token) {
  var API_URL = 'https://api.digitalocean.com/v2/'

  var digio_headers = {
    'Authorization': 'Bearer ' + token
  }

  var body_error = {
    id: 'invalid.response',
    message: 'API returned a non-json body'
  }

  // Pagination support structure used by module wrapper object
  var pagination = {
    page: 0,
    per_page: 0
  }

  // Tools module with predefined request methods
  var tools = {
    call: function (action, body, method, callback) {
      var options = {
        url: API_URL + action,
        headers: digio_headers,
        method: method || 'GET',
        json: body || true
      }

      request(options, function (err, res, body) {
        if (err)
          return callback(err)

        if (method === 'HEAD')
          return callback(null, res.headers)

        if (res.statusCode >= 400)
          return (typeof body !== 'object' ? callback(body_error, body) : callback(body))

        if (body === '' || body === undefined)
          return callback(null, {})
        else if (typeof body !== 'object')
          return callback(body_error, body)
        else
          callback(null, body)
      })
      // Reset pagination state
      pagination.page = 0
      pagination.per_page = 0
    },

    _get: function (action, callback) {

      if (action.indexOf('?') > -1) action += '&'
      else action += '?'

      this.call(
        action + 'page=' + pagination.page + '&per_page=' +
        pagination.per_page, null, 'GET', callback)
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
    },

    // Wrapper object for pagination and other filter support 
    _wrapper: function (action, paginate) {
      // Initialize an action wrapper structure
      var struct = {
        do: action
      }
      // Add pagination methods if specified
      if (paginate) {
        struct.page = function (page) {
          pagination.page = page
          return struct
        }
        struct.per_page = function (per_page) {
          pagination.per_page = per_page
          return struct
        }
      }
      return struct
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
