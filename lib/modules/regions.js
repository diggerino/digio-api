var regions = function (tools) {
  return {

    list: function (callback) {
      tools._get('regions', function (err, data) {
        if (err) callback(err)
        callback(null, data)
      })
    }

  }
}

module.exports = regions
