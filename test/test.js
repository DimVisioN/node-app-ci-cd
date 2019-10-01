'use strict';

const request = require('supertest');
const {describe, it} = require('mocha');

const app = require('../main');

describe('Basic suite', () => {

    it('failing test', function (done) {
        expect(false).to.equal(true);
    });

    it('should stop the process', () => {
        process.exit();
    });

});