var droplets = function (tools) {
  return {

    list: function (callback) {
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
    },

    list_droplet_snapshots: function (id, callback) {
      tools._get('droplets/' + id + '/snapshots', function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    list_droplet_backups: function (id, callback) {
      tools._get('droplets/' + id + '/backups', function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    list_droplet_actions: function (id, callback) {
      tools._get('droplets/' + id + '/actions', function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    create: function (name, region, size, image, ssh_keys, backups, ipv6,
                      priv_net, callback) {
      var body = {
        name: name,
        region: region,
        size: size,
        image: image
      }

      if (ssh_keys) body.ssh_keys = ssh_keys
      if (backups) body.backups = true
      if (ipv6) body.ipv6 = true
      if (priv_net) body.private_networking = true

      tools._post('droplets', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    get: function (id, callback) {
      tools._get('droplets/' + id, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    delete: function (id, callback) {
      tools._delete('droplets/' + id, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    }
  }
}

module.exports = droplets
