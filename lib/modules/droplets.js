var droplets = function (tools) {
  return {

    list_droplets: function (callback) {
      tools._get('droplets', function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },
    list_droplet_kernels: function (id, callback) {
      tools._get('droplets/' + id + '/kernels', function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    }
  }
}

module.exports = droplets
