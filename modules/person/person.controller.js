const Person = require('./person')

function create (request, response) {
  const person = new Person({
    name: request.body.name,
    secondName: request.body.secondName
  })

  person
    .save()
    .then(user => response.status(200).json(user))
    .catch(err => response.status(500).json(err))
}

function list (request, response) {
  Person
    .find()
    .then(data => response.status(200).json(data))
    .catch(err => response.status(500).json(err))
}

function edit (request, response) {
  Person.findByIdAndUpdate(request.body._id, {
    name: request.body.name,
    secondName: request.body.secondName
  })
    .then(data => response.status(200).json(data))
    .catch(err => response.status(500).json(err))
}

function findOne (request, response) {
  Person.findOne({
    _id: request.params.id
  })
    .then(data => response.status(200).json(data))
    .catch(err => response.status(500).json(err))
}

function remove (request, response) {
  Person.findOneAndRemove({
    _id: request.params.id
  })
    .then(data => response.status(200).json(data))
    .catch(err => response.status(500).json(err))
}

module.exports = {
  create,
  list,
  edit,
  findOne,
  remove
}
