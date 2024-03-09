/**
 * Two Pointers
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/minimum-common-value
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    
    let p1 = 0;
    let p2 = 0;

    while(p1 < nums1.length && p2 < nums2.length) {

        if(nums1[p1] === nums2[p2]) return nums1[p1];

        if(nums1[p1] < nums2[p2]) {
            p1++;
            continue;
        } 
        
        if(nums2[p2] < nums1[p1]) {
            p2++;
            continue;
        }
    }

    return -1;
};