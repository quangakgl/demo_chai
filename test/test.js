/**
 * Created by quang on 25/04/2017.
 */
const chai = require('chai');
chai.should();

const math = require('../math');

describe("Test divedeMath", () => {

    it('should throw orror not a number', () => {
        (() => {
            math.divide('not bad', 10)
        }).should.throw('a is not number');
    });
    it('should throw orror not b number', () => {
        (() => {
            math.divide(10, 'not good')
        }).should.throw('b is not number');
    });
    it('should throw orror equation infinity', () => {
        (() => {
            math.divide(10, 0)
        }).should.throw('equation infinity');
    });
    it('14/2 = 7', () => {
        math.divide(14, 2).should.equal(7);
    });

    it('19/3 = 6,333333333', () => {
        math.divide(19, 3).should.equal(6.3333333333);
    });

});
