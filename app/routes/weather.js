'use strict';

var request = require('request');

exports.getWeather = function(req, res){
  var key = process.env.WUNDERGROUND;
  var zip = req.body.zipCode;
  if (key === undefined){
    throw new Error('WUNDERGROUND key undefined! Did you remember to define it at runtime or export it in your .bash_profile?');
  }
  var url = 'http://api.wunderground.com/api/' + key + '/conditions/q/' + zip + '.json?callback=?';
  request.post(url, function(err, response, body){
    res.send(body);
  });
};

