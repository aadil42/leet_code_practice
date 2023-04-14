/**
 * 
 * Sort
 * 
 * Time O(n*log(n)) | Space O(n);
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) { 
    // just convert the string with BigInt.
return nums.map((x) => BigInt(x)).sort((a, b) => (a < b ? 1 : -1))[k - 1].toString();
};