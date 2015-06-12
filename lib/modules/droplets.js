/* Droplets module */
var droplets = function (tools) {
  /* Private methods */

  /* Public API */
  return {
    
    // Create a new droplet with all the provided optionals
    create: function (name, region, size, image) {
        function (callback) {
          var body = {
            name: name,
            region: region,
            size: size,
            image: image
          }
        }
        var wrapper = tools._wrapper(function (callback) {
            tools._post('droplets', body, function (err, data) {
              if (err) return callback(err)
              callback(null, data)
            })
          }
        }
        wrapper.ssh_keys = function (ssh_keys) { body.ssh_keys = ssh_keys; return wrapper }
        wrapper.backups = function (backups) { body.backups = backups; return wrapper }
        wrapper.ipv6 = function (ipv6) { body.ipv6 = ipv6; return wrapper }
        wrapper.private_networking = function (privnet) { body.private_networking(privnet); return wrapper }
        wrapper.user_data = function (udata) { body.user_data = udata; return wrapper }
    },

    // Delete a droplet based on its droplet ID
    delete: function (id) {
      return tools._wrapper(function (callback) {
        tools._delete('droplets/' + id, function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      }
    },

    // Retrieve information about a droplet based on its ID
    get: function (id) {
      return tools._wrapper(function (callback) {
        tools._get('droplets/' + id, function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      }
    },

    // List all registered droplets
    list: function () {
      return tools._wrapper(function (callback) {
        tools._get('droplets', function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      }
    },

    // List all relevant droplet actions connected to a droplet ID
    list_droplet_actions: function (id) {
      return tools._wrapper(function (callback) {
        tools._get('droplets/' + id + '/actions', function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      }
    },

    // List all available droplet kernels based on a droplet ID
    list_droplet_kernels: function (id) {
      return tools._wrapper(function (callback) {
        tools._get('droplets/' + id + '/kernels', function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      }
    },

    // List all droplet backups based on droplet ID
    list_droplet_backups: function (id) {
      return tools._wrapper(function (callback) {
        tools._get('droplets/' + id + '/backups', function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      }
    },

    // List all droplet snapshots based in droplet ID
    list_droplet_snapshots: function (id) {
      return tools._wrapper(function (callback) {
        tools._get('droplets/' + id + '/snapshots', function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      }
    },

    // List all neighbors running on the same physical hardware as your droplet
    list_droplet_neighbors: function (id) {
      return tools._wrapper(function (callback) {
        tools._get('droplets/' + id + '/neighbors', function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      }
    },

    // List all neighbors running on the same physical hardware
    list_all_droplet_neighbors: function () {
      return tools._wrapper(function (callback) {
        tools._get('reports/droplet_neighbors', function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      }
    },


    /* Droplet actions */

    // Change kernel version based on droplet ID and kernel ID
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

    // Disable backups on a droplet based on ID
    disable_backups: function (id, callback) {
      var body = {
        type: 'disable_backups'
      }

      tools._post('droplets/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    // Enable IPv6 functionality on a droplet based on its ID.
    enable_ipv6: function (id, callback) {
      var body = {
        type: 'enable_ipv6'
      }

      tools._post('droplets/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    // Enable private networking on a droplet based on its ID.
    enable_priv_net: function (id, callback) {
      var body = {
        type: 'enable_private_networking'
      }

      tools._post('droplets/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    // Retrieve information about a specific droplet action based on droplet ID, 
    get_droplet_action: function (droplet_id, action_id, callback) {
      tools._get('droplets/' + droplet_id + '/actions/' + action_id, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    // Reset the password of a droplet based on its ID
    password_reset: function (id, callback) {
      var body = {
        type: 'password_reset'
      }

      tools._post('droplets/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    // Power cycle a droplet based on its ID
    power_cycle: function (id, callback) {
      var body = {
        type: 'power_cycle'
      }

      tools._post('droplets/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    // Power off a droplet based on its ID
    power_off: function (id, callback) {
      var body = {
        type: 'power_off'
      }

      tools._post('droplets/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    // Power on a droplet based on its ID
    power_on: function (id, callback) {
      var body = {
        type: 'power_on'
      }

      tools._post('droplets/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    // Reboot a droplet based on its ID
    reboot: function (id, callback) {
      var body = {
        type: 'reboot'
      }

      tools._post('droplets/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    // Rebuild a droplet based on its droplet ID and image ID
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

    // Rename a droplet based on its ID and a provided name
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

    // Resize a droplet based on its ID and a new specified size
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

    // Restore a droplet based on its ID and a specified image ID
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

    // Shutdown a droplet based on its ID.
    shutdown: function (id, callback) {
      var body = {
        type: 'shutdown'
      }

      tools._post('droplets/' + id + '/actions', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    // Snapshot a droplet based on its ID, and a provided snapshot name
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
