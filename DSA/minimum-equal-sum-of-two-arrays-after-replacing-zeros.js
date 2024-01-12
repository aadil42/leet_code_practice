/**
 * iteration
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function(nums1, nums2) {
    let s1 = nums1.reduce((acc, curr) => acc+curr, 0) + nums1.filter((num) => num === 0).length;
    let s2 = nums2.reduce((acc, curr) => acc+curr, 0) + nums2.filter((num) => num === 0).length;
    let z1 = nums1.filter((num) => num === 0).length;
    let z2 = nums2.filter((num) => num === 0).length;

    if(s1 === s2) return s1;

    if(s1 < s2 && z1 > 0) return s2;
    if(s2 < s1 && z2 > 0) return s1;
    return -1;
};

var minSum1 = function(nums1, nums2) {
    let s1 = 0;
    let s2 = 0;
    let z1 = 0;
    let z2 = 0;

    for(let i = 0; i < nums1.length; i++) {
        s1 += nums1[i];
        if(!nums1[i]) {
            z1++;
            s1++;
        }
    }

    for(let i = 0; i < nums2.length; i++) {
        s2 += nums2[i];
        if(!nums2[i]) {
            s2++;
            z2++;
        }
    }
    
    if(s1 === s2) return s1;

    if(s1 < s2 && z1 > 0) return s2;
    if(s2 < s1 && z2 > 0) return s1;
    return -1;
};