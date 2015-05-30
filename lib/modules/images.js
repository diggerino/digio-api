/* Images module */
var images = function (tools) {
  /* Private methods */

  /* Public API */
  return {

    // Transfer an image based on the image ID and the region
    transfer: function (id, region, callback) {
      // Prepare the payload
      var body = {
        type: 'transfer',
        region: region
      }

      // Perform the POSt request
      tools._post('images/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    // Delete an image based on its ID
    delete: function (id, callback) {
      // Perform the DELETE request
      tools._delete('images/' + id, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    // Retrieve information about an image based on its ID
    get: function (id, callback) {
      // Perform the GET request
      tools._get('images/' + id, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    // Retrieve information about a specific action while providing an image id
    get_action: function (image_id, action_id, callback) {
      // Perform the GET request
      tools._get('images/' + image_id + '/actions/' + action_id, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    // Update an image name based on the image ID and a new name
    update: function (id, name, callback) {
        // Prepare the payload
        var body = {
          name: name
        }

        // Perform the PUT request
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
    // List images
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

      // Perform the GET request
      tools._get(endpoint, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    }
  }
}

module.exports = images
