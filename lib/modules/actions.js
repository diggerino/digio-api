var actions = function (tools) {
  return {

    get: function (id, callback) {
      tools._get('actions/' + id, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    list: function (callback) {
      tools._get('actions', function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    }
  }
}

module.exports = actions
