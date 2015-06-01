/* Regions module */
var regions = function (tools) {
  /* Private methods */

  /* Public API */
  return {

    // List all regions available
    list: function () {
      return tools._wrapper(function (callback) {
        // Perform the GET request
        tools._get('regions', function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      }, true)
    }
  }
}

module.exports = regions
