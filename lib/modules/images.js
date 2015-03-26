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
    },

    update: function (id, name, callback) {
        var body = {
          name: name
        }

        tools._put('images/' + id, body, function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
    },

    /*
     * Type can be either 'application' or 'distribution' or null of not filtered
     * Priv can be either true or other falsy value for false
     * Page is used for pagination
     */
    list: function (type, priv, page, callback) {
      var endpoint = 'images?'
      
      if (type !== null || type !== undefined ||
          priv !== null || priv !== undefined ||
          page !== null || page !== undefined) {
        
        if (type) endpoint += 'type=' + type + '&'
        if (priv) endpoint += 'private=true' + '&'
        if (page) endpoint += 'page=' + page + '&'

      }
      
      // Strip off ending character, be it a ? or a &
      endpoint = endpoint.substring(0, endpoint.length - 1)

      tools._get(endpoint, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    }
  }
}

module.exports = images
