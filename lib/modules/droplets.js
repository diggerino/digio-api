var droplets = function (tools) {
  return {

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

    delete: function (id, callback) {
      tools._delete('droplets/' + id, function (err, data) {
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

    list: function (callback) {
      tools._get('droplets', function (err, data) {
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

    list_droplet_kernels: function (id, callback) {
      tools._get('droplets/' + id + '/kernels', function (err, data) {
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

    list_droplet_snapshots: function (id, callback) {
      tools._get('droplets/' + id + '/snapshots', function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },



    // ACTIONS
    change_kernel: function (id, kernel_id, callback) {
      var body = {
        type: 'change_kernel',
        kernel: kernel_id
      }

      tools._post('droplets/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    disable_backups: function (id, callback) {
      var body = {
        type: 'disable_backups'
      }

      tools._post('droplets/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    enable_ipv6: function (id, callback) {
      var body = {
        type: 'enable_ipv6'
      }

      tools._post('droplets/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    enable_priv_net: function (id, callback) {
      var body = {
        type: 'enable_private_networking'
      }

      tools._post('droplets/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    get_droplet_action: function (droplet_id, action_id, callback) {
      tools._get('droplets/' + droplet_id + '/actions/' + action_id, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    password_reset: function (id, callback) {
      var body = {
        type: 'password_reset'
      }

      tools._post('droplets/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    power_cycle: function (id, callback) {
      var body = {
        type: 'power_cycle'
      }

      tools._post('droplets/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    power_off: function (id, callback) {
      var body = {
        type: 'power_off'
      }

      tools._post('droplets/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    power_on: function (id, callback) {
      var body = {
        type: 'power_on'
      }

      tools._post('droplets/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    reboot: function (id, callback) {
      var body = {
        type: 'reboot'
      }

      tools._post('droplets/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    rebuild: function (id, image_id, callback) {
      if (!isNaN(image_id)) image_id = Number(image_id)
      var body = {
        type: 'rebuild',
        image: image_id
      }

      tools._post('droplets/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    rename: function (id, name, callback) {
      var body = {
        type: 'rename',
        name: name
      }

      tools._post('droplets/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    resize: function (id, new_size, callback) {
      var body = {
        type: 'resize',
        size: new_size
      }

      tools._post('droplets/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    restore: function (id, image_id, callback) {
      var body = {
        type: 'restore',
        image: image_id
      }

      tools._post('droplets/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    shutdown: function (id, callback) {
      var body = {
        type: 'shutdown'
      }

      tools._post('droplets/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    snapshot: function (id, name, callback) {
      var body = {
        type: 'snapshot',
        name: name
      }

      tools._post('droplets/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    }

  }
}

module.exports = droplets
