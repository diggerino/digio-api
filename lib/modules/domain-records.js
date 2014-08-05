var domains = function (tools) {
  return {

    create: function (domain, data, type, callback) {
      var body = {
        name: domain,
        data: ip_address,
        tyoe; type
      }

      tools._post('domains/' + domain + '/records', body, function (err, data) {
        if (err) callback(err)
        callback(null, data)
      })
    },

    delete: function (domain, record, callback) {
      tools._delete('domains/' + domain + '/records/' + record, function (err, data) {
        if (err) callback(err)
        callback(null, data)
      })
    },

    get: function (domain, record, callback) {
      tools._get('domains/' + domain + '/records/' + record, function (err, data) {
        if (err) callback(err)
        callback(null, data)
      })
    },

    list: function (domain, callback) {
      tools._get('domains/' + domain + '/records', function (err, data) {
        if (err) callback(err)
        callback(null, data)
      })
    },

    update: function (domain, record, new_name, callback) {
      var body = {
        name: new_name
      }

      tools._put('domains/' + domain + '/records', body, function (err, data) {
        if (err) callback(err)
        callback(null, data)
      })
    }

  }
}

module.exports = domains
