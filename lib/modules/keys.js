var keys = function (tools) {
  return {

    create: function (name, public_key) {
      var body = {
        name: name,
        public_key: public_key
      }

      tools._post('account/keys', body, function (err, data) {
        if (err) callback(err)
        callback(null, data)
      })
    },

    delete: function (id, callback) {
      tools._delete('account/keys/' + id, function (err, data) {
        if (err) callback(err)
        callback(null, data)
      })
    },

    get: function (id, callback) {
      tools._get('account/keys/' + id, function (err, data) {
        if (err) callback(err)
        callback(null, data)
      })
    },

    update: function (id, name, callback) {
        var body = {
          name: name
        }

        tools._put('account/keys/' + id, body, function (err, data) {
          if (err) callback(err)
          callback(null, data)
        })
    },

    list: function (callback) {
      tools._get('account/keys', function (err, data) {
        if (err) callback(err)
        callback(null, data)
      })
    }

  }
}

module.exports = keys
