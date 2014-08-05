var domains = function (tools) {
  return {

    create: function (domain, ip_address, callback) {
      var body = {
        name: domain,
        ip_address: ip_address
      }

      tools._post('domains', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    delete: function (domain, callback) {
      tools._delete('domains/' + domain, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    get: function (domain, callback) {
      tools._get('domains/' + domain, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    list: function (callback) {
      tools._get('domains', function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },


    // Actions
    create_record: function (domain, data, type, callback) {
      var body = {
        name: domain,
        data: ip_address,
        type: type
      }

      tools._post('domains/' + domain + '/records', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    delete_record: function (domain, record, callback) {
      tools._delete('domains/' + domain + '/records/' + record, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    get_record: function (domain, record, callback) {
      tools._get('domains/' + domain + '/records/' + record, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    list_records: function (domain, callback) {
      tools._get('domains/' + domain + '/records', function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    update_record: function (domain, record, new_name, callback) {
      var body = {
        name: new_name
      }

      tools._put('domains/' + domain + '/records', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    }

  }
}

module.exports = domains
