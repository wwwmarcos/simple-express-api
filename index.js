const bodyParser = require('body-parser')
const http = require('http')
const express = require('express')
const app = express()
const personRoutes = require('./modules/person/person.routes')
const database = require('./modules/config/db/db.config')
const config = require('./modules/config/config.json')

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/person', personRoutes)

app.set('port', (process.env.PORT || config.PORT))

app.listen(app.get('port'), function() {
  console.log('running on port', app.get('port'))
})