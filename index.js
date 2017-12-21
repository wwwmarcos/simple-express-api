const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')

const personRoutes = require('./modules/person/person.routes')
const database = require('./modules/config/db/db.config')
const config = require('./modules/config/config.json')

const app = express()

const APP_PORT = process.env.PORT || config.PORT

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
  extended: true
}))

database.open()

app.use(cors())

app.use('/person', personRoutes)

app.listen(APP_PORT, function () {
  console.log('running on port', APP_PORT)
})
