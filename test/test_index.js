var request = require('supertest');
var app = require('../index.js');

describe('GET /', function(){
    it("Respond with welcome to food app", function(done){
        request(app).get('/').expect('Welcome to the food app!', done);
    });
});