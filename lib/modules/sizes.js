var sizes = function (tools) {
  return {

    list: function (callback) {
      tools._get('sizes', function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    }

  }
}

module.exports = sizes
