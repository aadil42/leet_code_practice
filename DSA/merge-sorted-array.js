/**
 * Array | Two Pointer
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/merge-sorted-array/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    let k = m + n - 1;
    m =  m - 1;
    n =  n - 1;

    while(m > -1 && n > -1) {
        if(nums1[m] >= nums2[n]) {
            nums1[k] = nums1[m];
            m--;
        } else {
            nums1[k] = nums2[n];
            n--;
        }
        k--;
    }

    while(n > -1) {
        nums1[k] = nums2[n];
        n--;
        k--;
    }
};


/**
 * Linear 
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/merge-sorted-array/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge1 = function(nums1, m, nums2, n) {
    
    let k = m + n - 1;
    m = m - 1;
    n = n - 1;
    console.log(m,n);
    while(m >= 0 && n >= 0) {
        if(nums1[m] > nums2[n]) {
            nums1[k] = nums1[m];
            m--;
        } else {
            nums1[k] = nums2[n];
            n--;
        }
        k--;
    }
    
    if(n >= 0) {
        while(n >= 0) {
            nums1[k] = nums2[n];
            n--;
            k--;
        }
    }
};
