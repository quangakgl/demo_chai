/**
 * Created by quang on 25/04/2017.
 */
const chai = require('chai');
chai.should();
const math = require('../quadratic');
describe("Test quadratic", () => {
    it('should throw orror not a number', () => {
        (() => {
            math.quadratic('abc', 2, 3)
        }).should.throw('not a number');
    });

    it('should throw orror not quadratic', () => {
        (() => {
            math.quadratic(0, 2, 3)
        }).should.throw('not quadratic');
    });

    it('should throw orror PT vo nghiem', () => {
        (() => {
            math.quadratic(1, 2, 3)
        }).should.throw('PT vo nghiem');
    });

    it('should show equation have 1 value', () => {
        math.quadratic(1, 2, 1).should.equal(-1);
    });

    it('should show equation have 2 value', () => {
        math.quadratic(1, 3, 2).should.eql([-1, -2]);
    });
    it('should show equation have 2 value', () => {
        math.quadratic(1, 4, 3).should.eql([-1, -4]);
    });

});
