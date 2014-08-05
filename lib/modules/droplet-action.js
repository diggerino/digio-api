var droplets = function (tools) {
  return {

    actions: function (droplet, action callback) {
      tools._get('droplets/' + droplet + '/actions/' + action, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    change_kernel: function (droplet, new_kernel, callback) {
      var body = {
        type: 'change_kernel',
        name: new_kernel
      }

      tools._post('droplets/' + droplet + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    disable_backups: function (droplet, callback) {
      var body = {
        type: 'disable_backups'
      }

      tools._post('droplets/' + droplet + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    enable_ipv6: function (droplet, callback) {
      var body = {
        type: 'enable_ipv6'
      }

      tools._post('droplets/' + droplet + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    enable_private_networking: function (droplet, callback) {
      var body = {
        type: 'enable_private_networking'
      }

      tools._post('droplets/' + droplet + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    password_reset: function (droplet, callback) {
      var body = {
        type: 'password_reset'
      }

      tools._post('droplets/' + droplet + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    power_cycle: function (droplet, callback) {
      var body = {
        type: 'power_cycle'
      }

      tools._post('droplets/' + droplet + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    power_off: function (droplet, callback) {
      var body = {
        type: 'power_off'
      }

      tools._post('droplets/' + droplet + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    power_on: function (droplet, callback) {
      var body = {
        type: 'power_on'
      }

      tools._post('droplets/' + droplet + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    reboot: function (droplet, callback) {
      var body = {
        type: 'reboot'
      }

      tools._post('droplets/' + droplet + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    rebuild: function (droplet, image, callback) {
      var body = {
        type: 'rebuild',
        image: image
      }

      tools._post('droplets/' + droplet + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    rename: function (droplet, new_name, callback) {
      var body = {
        type: 'rename',
        name: new_name
      }

      tools._post('droplets/' + droplet + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    resize: function (droplet, new_size, callback) {
      var body = {
        type: 'resize',
        size: new_size
      }

      tools._post('droplets/' + droplet + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    restore: function (droplet, image, callback) {
      var body = {
        type: 'restore',
        image: image
      }

      tools._post('droplets/' + droplet + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    shutdown: function (droplet, callback) {
      var body = {
        type: 'shutdown'
      }

      tools._post('droplets/' + droplet + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    snapshot: function (droplet, snapshot_name, callback) {
      var body = {
        type: 'snapshot',
        name: snapshot_name
      }

      tools._post('droplets/' + droplet + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    }

  }
}

module.exports = droplets
