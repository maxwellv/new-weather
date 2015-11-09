'use strict';

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

  app.get('/', home.index);
  app.post('/getWeather', weather.getWeather);
  console.log('Routes Loaded');
  fn();
}

