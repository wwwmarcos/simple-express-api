const express = require('express')
const controller = require('./person.controller')
let personRoutes = express.Router()

personRoutes.post('/create', controller.create)
personRoutes.get('/list', controller.list)
personRoutes.get('/get/:id', controller.findOne)
personRoutes.put('/edit', controller.edit)
personRoutes.delete('/remove/:id', controller.remove)

module.exports = personRoutes