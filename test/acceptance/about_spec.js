/* jshint expr:true */

'use strict';

var app = require('../../app/app');
var request = require('supertest');
var expect = require('chai').expect;


describe('about', function(){
  describe('GET /', function(){
    it('should show the site info page', function(done){
      request(app).get('/about').end(function(err, res){
        expect(res.status).to.equal(200);
        expect(res.text).to.contain('Enter your ZIP code on the home page and it will tell you your current conditions and temperature');
        expect(res.text).to.contain('http://www.wunderground.com/');
        done();
      });
    });
  });
});
