/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
    // sort it string wise.
    nums.sort((a,b) => {
        if(a.length !== b.length) return b.length - a.length;
        return b.localeCompare(a);
    });
    return nums[k-1];
};

/**
 * 
 * Sort
 * 
 * Time O(n*log(n)) | Space O(n);
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber0 = function(nums, k) { 
    // just convert the string with BigInt.
return nums.map((x) => BigInt(x)).sort((a, b) => (a < b ? 1 : -1))[k - 1].toString();
};