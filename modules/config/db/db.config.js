const mongoose = require('mongoose')
const config = require('../config.json')

function open () {
  mongoose.Promise = global.Promise
  mongoose.connection.openUri(config.MONGO_URL)
}

module.exports = {
  open
}
