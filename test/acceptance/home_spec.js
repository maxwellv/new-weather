/* jshint expr:true, camelcase:false */

'use strict';

var app = require('../../app/app');
var request = require('supertest');
var expect = require('chai').expect;


describe('home', function(){
  describe('GET /', function(){
    it('should show the home page', function(done){
      request(app).get('/').end(function(err, res){
        expect(res.status).to.equal(200);
        expect(res.text).to.contain('Want to find out what your weather\'s like?');
        done();
      });
    });
  });
});

describe('post /getWeather', function(){
  it('should get weather info', function(done){
    request(app).post('/getWeather').field('zipCode', '37115').end(function(err, res){
      var weather = JSON.parse(res.body.body);
      expect(res.status).to.equal(200);
      expect(weather.current_observation.display_location.full).to.equal('Madison, TN');
      done();
    });
  });
});
