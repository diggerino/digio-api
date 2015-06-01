/* Domains module */
var domains = function (tools) {
  /* Private methods */

  /* Public API */
  return {
    
    // Create a new domain
    create: function (domain, ip_address) {
      var body = {
        name: domain,
        ip_address: ip_address
      }
      return tools._wrapper(function (callback) {
        tools._post('domains', body, function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      })
    },

    // Delete a domain by its domain name
    delete: function (domain) {
      return tools._wrapper(function (callback) {
        tools._delete('domains/' + domain, function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      })
    },

    // Get information for a particular domain based on its domain name
    get: function (domain) {
      return tools._wrapper(function (callback) {
        tools._get('domains/' + domain, function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      })
    },

    // List all domains
    list: function () {
      return tools._wrapper(function (callback) {
        tools._get('domains', function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      }, true)
    },


    /* Records */
    
    // Create a record
    create_record: function (domain, type) {
      var body = {
        type: type
      }
      var wrapper = tools._wrapper(function (callback) {
        tools._post('domains/' + domain + '/records', body, function (err, _data) {
          if (err) return callback(err)
          callback(null, _data)
        })
      })
      wrapper.name = function (name) { body.name = name; return wrapper }
      wrapper.data = function (data) { body.data = data; return wrapper }
      wrapper.priority = function (pri) { body.priority = pri; return wrapper }
      wrapper.port = function (port) { body.port = port; return wrapper }
      wrapper.weight = function (weight) { body.weight = weight; return wrapper }

      return wrapper
    },

    // Delete a record by providing the parent domain and the record ID
    delete_record: function (domain, record) {
      return tools._wrapper(function (callback) {
        tools._delete('domains/' + domain + '/records/' + record, function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      })
    },

    // Retrieve information of a record based on the parent domain and the record ID
    get_record: function (domain, record) {
      return tools._wrapper(function (callback) {
        tools._get('domains/' + domain + '/records/' + record, function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      })
    },

    // List all records that are children of the provided domain
    list_records: function (domain) {
      return tools._wrapper(function (callback) {
        tools._get('domains/' + domain + '/records', function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      }, true)
    },

    // Update a record based on the parent domain and the record ID
    update_record: function (domain, record) {
      var body = {}
      var wrapper = tools._wrapper(function (callback) {
        tools._put('domains/' + domain + '/records/' + record, body, function (err, data) {
          if (err) return callback(err)
          callback(null, data)
        })
      })
      wrapper.type = function (type) { body.type = type; return wrapper }
      wrapper.name = function (name) { body.name = name; return wrapper }
      wrapper.data = function (data) { body.data = data; return wrapper }
      wrapper.priority = function (pri) { body.pri = pri; return wrapper }
      wrapper.port = function (port) { body.port = port; return wrapper }
      wrapper.weight = function (wgt) { body.weight = wgt; return wrapper }

      return wrapper
    }
  }
}

module.exports = domains
