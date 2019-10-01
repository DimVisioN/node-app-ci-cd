'use strict';

const request = require('supertest');
const {describe, it} = require('mocha');
const {expect} = require('chai');

const app = require('../main');

describe('Basic suite', () => {

    it('failing test', function (done) {
        expect(false).to.equal(true);
    });

});