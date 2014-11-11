'use strict';

var d = require('../lib/request-debug');
var initialized = false;

module.exports = function(req, res, next){
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = require('../routes/home');
  var weather = require('../routes/weather');

  app.get('/', d, home.index);
  app.post('/getWeather', d, weather.getWeather);
  console.log('Routes Loaded');
  fn();
}

