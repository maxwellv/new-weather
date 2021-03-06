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
  var about = require('../routes/about');

  app.get('/', home.index);
  app.get('/about', about.index);
  app.post('/getWeather', weather.getWeather);
  console.log('Routes Loaded');
  fn();
}

