var mongoose = require('mongoose')
var config = require('../config.json')

mongoose.Promise = global.Promise
mongoose.connect(config.MONGO_URL)

var db = mongoose.connection

db.on('error', function(err) {
  console.log('Mongodb - Error.', err)
})

db.on('open', function() {
  console.log('Mongodb - Open')
})

db.on('connected', function() {
  console.log('Mongodb - Connected')
})

db.on('disconnected', function(err) {
  console.log('Mongodb - Disconnected')
})