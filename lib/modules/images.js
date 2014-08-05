var images = function (tools) {
  return {

    delete: function (id, callback) {
      tools._delete('images/' + id, function (err, data) {
        if (err) callback(err)
        callback(null, data)
      })
    },

    get: function (id, callback) {
      tools._get('images/' + id, function (err, data) {
        if (err) callback(err)
        callback(null, data)
      })
    },

    update: function (id, name, callback) {
        var body = {
          name: name
        }

        tools._put('images/' + id, body, function (err, data) {
          if (err) callback(err)
          callback(null, data)
        })
    },

    list: function (callback) {
      tools._get('images', function (err, data) {
        if (err) callback(err)
        callback(null, data)
      })
    }

  }
}

module.exports = images
