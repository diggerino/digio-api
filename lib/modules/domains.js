var domains = function (tools) {
  return {

    create_domain_record: function (domain, ip_address, callback) {
      var body = {
        name: domain,
        ip_address: ip_address
      }

      tools._post('domains', body, function (err, data) {
        if (err) callback(err)
        callback(null, data)
      })
    },

    list_all_domains: function (callback) {
      tools._get('domains', function (err, data) {
        if (err) callback(err)
        callback(null, data)
      })
    }

  }
}

module.exports = domains
