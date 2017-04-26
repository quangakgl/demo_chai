/**
 * Created by quang on 25/04/2017.
 */
// PT bac 2 co dang : a*x*x + b*x + c = 0
exports.quadratic = (a, b, c) => {

    let delta = b * b - 4 * a * c;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        throw new Error('not a number');
    }
    if (a === 0) {
        throw new Error('not quadratic');
    }
    if (delta < 0) {
        throw new Error('PT vo nghiem');
    }
    if (delta === 0) {
        return -b / (2 * a);
    }
    let sprt = Math.sqrt(delta);
    return [(-b + sprt) / (2 * a), (-b - sprt) / (2 * a)];
};