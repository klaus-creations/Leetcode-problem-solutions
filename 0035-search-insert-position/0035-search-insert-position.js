/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function(nums, target) {
    if (nums.indexOf(target) !== -1) {
        return nums.indexOf(target);
    } else {
        const nums1 = [...nums, target];
        nums1.sort((a, b) => a - b);

        return nums1.indexOf(target)
    }
};