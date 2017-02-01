'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();

module.exports = app; // for testing

// configuration to read from swagger.json??
// var express = require("express");
// app.use(express.json());

// another configuration to read from swagger.json??
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: false}));

var config = {
  appRoot: __dirname // required config
  // swaggerFile: 'api/swagger/swagger.json'
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
