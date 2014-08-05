var droplets = function (tools) {
  return {

    list_droplets: function (callback) {
      tools._get('droplets', function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    }

  }
}

module.exports = droplets
