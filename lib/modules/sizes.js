var sizes = function (tools) {
  return {

    list_sizes: function (callback) {
      tools._get('sizes', function (err, data) {
        if (err) callback(err)
        callback(null, data)
      })
    }

  }
}

module.exports = sizes
