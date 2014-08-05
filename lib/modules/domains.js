var domains = function (tools) {
  return {

    create: function (domain, ip_address, callback) {
      var body = {
        name: domain,
        ip_address: ip_address
      }

      tools._post('domains', body, function (err, data) {
        if (err) callback(err)
        callback(null, data)
      })
    },

    get: function (domain, callback) {
      tools._get('domains/' + domain, function (err, data) {
        if (err) callback(err)
        callback(null, data)
      })
    },

    list: function (callback) {
      tools._get('domains', function (err, data) {
        if (err) callback(err)
        callback(null, data)
      })
    }

  }
}

module.exports = domains
