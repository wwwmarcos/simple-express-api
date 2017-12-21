const mongoose = require('mongoose')

const Schema = mongoose.Schema

const person = new Schema({
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
