/* Domains module */
var domains = function (tools) {
  /* Private methods */

  /* Public API */
  return {
    
    // Create a new domain
    create: function (domain, ip_address, callback) {
      var body = {
        name: domain,
        ip_address: ip_address
      }
      
      // Perform the POST request
      tools._post('domains', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    // Delete a domain by its domain name
    delete: function (domain, callback) {
      // Perform the DELETE request
      tools._delete('domains/' + domain, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    // Get information for a particular domain based on its domain name
    get: function (domain, callback) {
      // Perform the GET request
      tools._get('domains/' + domain, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    // List all domains
    list: function (callback) {
      // Perform the GET request
      tools._get('domains', function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },


    /* Records */
    
    // Create a record
    create_record: function (domain, type, name, data, priority, port, weight, callback) {
      // Defined the body. Variables can be null based on their requirements.
      // These are stated in the DigitalOcean API docs
      var body = {
        name: name,
        data: data,
        type: type,
        priority: priority,
        port: port,
        weight: weight
      }

      // Perform the POST request
      tools._post('domains/' + domain + '/records', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    // Delete a record by providing the parent domain and the record ID
    delete_record: function (domain, record, callback) {
      // Perform the DELETE request
      tools._delete('domains/' + domain + '/records/' + record, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    // Retrieve information of a record based on the parent domain and the record ID
    get_record: function (domain, record, callback) {
      // Perform the GET request
      tools._get('domains/' + domain + '/records/' + record, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    // List all records that are children of the provided domain
    list_records: function (domain, callback) {
      // Perform the GET request
      tools._get('domains/' + domain + '/records', function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    },

    // Update a record based on the parent domain, the record ID, and a provided new name
    update_record: function (domain, record, new_name, callback) {
      var body = {
        name: new_name
      }
      
      // Perform the PUT request
      tools._put('domains/' + domain + '/records', body, function (err, data) {
        if (err) return callback(err)
        callback(null, data)
      })
    }
  }
}

module.exports = domains
