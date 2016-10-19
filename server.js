var bp = require('body-parser')
var express = require('express')
var path = require('path')
var port = 8080
var app = express()

app.use(express.static(path.join(__dirname, './client')))
//app.use(express.static(path.join(__dirname, './bower_components')))
app.use(bp.json())

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.listen(port, function() {
    console.log('Node server on port',port)
})
