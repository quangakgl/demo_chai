/**
 * Created by quang on 25/04/2017.
 */
exports.divide = (a, b) => {
    let a_ = parseFloat(a);
    let b_ = parseFloat(b);

    if (isNaN(a_)) {
        throw new Error('a is not number');
    }

    if (isNaN(b_)) {
        throw new Error('b is not number');
    }


    if (b_ === 0) {
        throw new Error('equation infinity');
    }


    return parseFloat(a_) / parseFloat(b_);
};