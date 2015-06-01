/* Images module */
var images = function (tools) {
  /* Private methods */

  /* Public API */
  return {

    // Convert an image to a snapshot based on its image ID
    convert: function (id) {
      // Prepare the payload
      var body = { type: 'convert' }

      return tools._wrapper(function (callback) { 
        // Perform the POST request
        tools._post('images/' + id + '/actions', body, function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      })
    },

    // Delete an image based on its ID
    delete: function (id) {
      return tools._wrapper(function (callback) {
        // Perform the DELETE request
        tools._delete('images/' + id, function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      })
    },

    // Retrieve information about an image based on its ID
    get: function (id) {
      return tools._wrapper(function (callback) {
        // Perform the GET request
        tools._get('images/' + id, function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      })
    },

    // Retrieve information about a specific action by providing an image and action id
    get_action: function (image_id, action_id) {
      return tools._wrapper(function (callback) {
        // Perform the GET request
        tools._get('images/' + image_id + '/actions/' + action_id, function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      })
    },

    // Transfer an image based on the image ID and the region
    transfer: function (id, region) {
      // Prepare the payload
      var body = {
        type: 'transfer',
        region: region
      }

      return tools._wrapper(function (callback) {
        // Perform the POSt request
        tools._post('images/' + id + '/actions', body, function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      })
    },

    // Update an image name based on the image ID and a new name
    update: function (id, name) {
        // Prepare the payload
        var body = {
          name: name
        }

        return tools._wrapper(function (callback) {
          // Perform the PUT request
          tools._put('images/' + id, body, function (err, data) {
            if (err) return callback(err)
            callback(null, data)
          })
        })
    },

    // List images
    list: function () {
      // Init an endpoint object for filter manipulation
      var endpoint = { uri: 'images?' }

      // Initialize the wrapper object
      var wrapper = tools._wrapper(function (callback) {
        // Perform the GET request
        tools._get(endpoint.uri, function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      }, true)

      // Add the type filter
      wrapper.type = function (type) { 
        endpoint.uri += '&type=' + type
        return wrapper
      }

      // Add the private filter
      wrapper.private = function (priv) {
        endpoint.uri += '&private=' + priv
        return wrapper
      }

      return wrapper
    }
  }
}

module.exports = images
