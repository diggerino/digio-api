/* Extras modul */
var extras = function (tools) {
  /* Private methods */

  /* Public API */
  return {
    // Retrieve information about current command rate
    rate: function (callback) {
      // Perform the HEAD request
      tools._head('sizes', function (err, data) {
        if (err) return callback(err)
        callback(null, {'ratelimit-limit': data['ratelimit-limit'],
                        'ratelimit-remaining': data['ratelimit-remaining'],
                        'ratelimit-reset': data['ratelimit-reset']})
      })
    }
  }
}

module.exports = extras
