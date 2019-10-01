'use strict';

const request = require('supertest');
const {describe, it} = require('mocha');

const app = require('../main');

describe('Basic suite', () => {

    it('should respond with "Test"', function (done) {
        request(app).get('/').expect('Fail', () => {
            done();
        });
    });

    it('should stop the process', () => {
        process.exit();
    });

});