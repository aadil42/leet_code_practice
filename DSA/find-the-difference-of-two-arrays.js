/**
 * Hashing
 * Time O(n) | Space O(n)
 *  https://leetcode.com/problems/find-the-difference-of-two-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    
    const nums1Unique = new Set(nums1);
    const nums2Unique = new Set(nums2);
    
    const nums1Set = new Set();
    const nums2Set = new Set();

    for(let i = 0; i < nums1.length; i++) {
        if(!nums2Unique.has(nums1[i])) nums1Set.add(nums1[i]);
    } 

    for(let i = 0; i < nums2.length; i++) {
        if(!nums1Unique.has(nums2[i])) nums2Set.add(nums2[i]);
    } 

    return [[...nums1Set], [...nums2Set]];
};