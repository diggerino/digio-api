/* Keys module */
var keys = function (tools) {
  /* Private methods */

  /* Public API */
  return {

    // Create a new key by providing a name and the public key data
    create: function (name, public_key) {
      var body = {
        name: name,
        public_key: public_key
      }

      return tools.wrapper(function (callback) {
        tools._post('account/keys', body, function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      })
    },

    // Delete an ssh key based on its ID
    delete: function (id) {
      return tools._wrapper(function (callback) {
        tools._delete('account/keys/' + id, function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      })
    },

    // Retrieve information about an ssh key based on its ID
    get: function (id) {
      return tools._wrapper(function (callback) {
        tools._get('account/keys/' + id, function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      })
    },

    // Update an ssh key based on its ID and a provided new name
    update: function (id, name) {
        var body = {
          name: name
        }

        return tools._wrapper(function (callback) {
          tools._put('account/keys/' + id, body, function (err, data) {
            if (err) return callback(err)
            callback(null, data)
          })
        })
    },

    // List all ssh keys
    list: function () {
      return tools._wrapper(function (callback) {
        tools._get('account/keys', function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      }, true)
    }
  }
}

module.exports = keys
