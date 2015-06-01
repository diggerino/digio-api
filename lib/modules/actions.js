/* Actions module */
var actions = function (tools) {
  /* Private methods */

  /* Publi API */
  return {

    /* Retrieve an action by its ID */
    get: function (id) {
      return tools._wrapper(
        function (callback) {
          tools._get('actions/' + id, function (err, data) {
              if (err) return callback(err)
              callback(null, data)
          })
        }, false)
    },

    /* List all actions */
    list: function () {
      return tools._wrapper(
        function (callback) {
          tools._get('actions', function (err, data) {
            if (err) return callback(err)
            callback(null, data)
          })
        }, true)
    }
  }
}

// Export the module
module.exports = actions
