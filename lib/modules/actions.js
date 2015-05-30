/* Actions module */
var actions = function (tools) {
  /* Private methods */

  /* Publi API */
  return {

    /* Retrieve an action by its ID */
    get: function (id, callback) {
      // Perform the GET request
      tools._get('actions/' + id, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    /* List all actions */
    list: function (callback) {
      // Perform the GET request
      tools._get('actions', function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    }
  }
}

// Export the module
module.exports = actions
