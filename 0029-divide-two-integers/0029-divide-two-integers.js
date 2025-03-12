/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
let divide = function(dividend, divisor) {
    let value = Math.trunc(dividend / divisor);
    if(value >= 2**31) {
        const some = value - 2**31;
        return Math.trunc(dividend / divisor) - some - 1
    } else if (value <= -(2**31)) {
        let some = value + 2**31;
        return Math.trunc(dividend / divisor) + some 
    } else {
        return   Math.trunc(dividend / divisor)

    }
};
