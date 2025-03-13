/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    const isNegative = x < 0;
    const value = String(Math.abs(x)).split('').reverse().join('');
    const reversed = Number(value) * (isNegative ? -1 : 1);

    if (reversed > 2**31 - 1 || reversed < -(2**31)) {
        return 0;
    }

    return reversed;
};
