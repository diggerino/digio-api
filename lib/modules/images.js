var images = function (tools) {
  return {

    transfer: function (id, region, callback) {
      var body = {
        type: 'transfer',
        region: region
      }

      tools._post('images/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    delete: function (id, callback) {
      tools._delete('images/' + id, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    get: function (id, callback) {
      tools._get('images/' + id, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    get_action: function (image_id, action_id, callback) {
      tools._get('images/' + image_id + '/actions/' + action_id, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    }),

    update: function (id, name, callback) {
        var body = {
          name: name
        }

        tools._put('images/' + id, body, function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
    },

    list: function (callback) {
      tools._get('images', function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    }

  }
}

module.exports = images
