/* Sizes modul */
var sizes = function (tools) {
  /* Private methods */

  /* Public API */
  return {
    // List all available sizes
    list: function () {
      return tools._wrapper(function (callback) {
        // Perform the GET request
        tools._get('sizes', function (err, data) {
            if (err) return callback(err)
            callback(null, data)
        })
      }, true)
    }
  }
}

module.exports = sizes
