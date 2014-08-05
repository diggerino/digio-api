var extras = function (tools) {
  return {
    rate: function (callback) {
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
