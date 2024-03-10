/**
 * Linear
 * Time O(n) | Space O(n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const nums1Set = new Set(nums1);
    const result = new Set();

    for(let i = 0; i < nums2.length; i++) {
        if(nums1Set.has(nums2[i])) result.add(nums2[i]);
    }

    return [...result];
};  

/**
 * Hashing
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/intersection-of-two-arrays
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection1 = function(nums1, nums2) {
    
    const nums1Set = new Set(nums1);
    const nums2Set = new Set(nums2);

    const ansSet = new Set();

    let i = 0;
    while(i < nums1.length) {
        if(nums1Set.has(nums1[i]) && nums2Set.has(nums1[i])) ansSet.add(nums1[i]);
        i++;
    }
    i = 0;
    while(i < nums2.length) {
        if(nums1Set.has(nums2[i]) && nums2Set.has(nums2[i])) ansSet.add(nums2[i]);
        i++;
    }

    return [...ansSet];
};