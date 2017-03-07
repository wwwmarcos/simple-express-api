const mongoose = require('mongoose')

let Schema = mongoose.Schema

let person = new Schema({
  name: {
    type: String,
    required: true
  },
  secondName: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Person', person)