/* jshint expr:true */

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
