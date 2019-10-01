'use strict';

const {describe, it} = require('mocha');
const {expect} = require('chai');

describe('Basic suite', () => {

    it('passing test', function (done) {
        expect(true).to.equal(true);
    });

});