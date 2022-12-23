/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    nums1 = [...nums1.slice(m), ...nums1.slice(0,m)];
    
    let i = n;
    let j = 0;
    let k = 0;

    
    while(i < m+n && j < n) {
        console.log(nums2[j], nums1[i]);

        if(nums2[j] < nums1[i]) {
            nums1[k] = nums2[j];
            j++;
        } else {
            nums1[k] = nums1[i];
            i++;
        }
        k++;
    }

    if(i == m+n) {
    
        nums1 = [...nums1.slice(0, i - j - 1), ...nums2.slice(j)];
    }
    return nums1;
};
//[0,0,0,1,2,3]  [2,5,6]
const  nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
console.log(merge(nums1, m, nums2, n));