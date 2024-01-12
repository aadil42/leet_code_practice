/**
 * Brute force
 * 
 * Time O(n) | Space O(n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArraysBF = function(nums1, nums2) {

    const merged = [];
    function merge(nums1, nums2) {
  
        let i = 0;
        let j = 0;
  
        while(i < nums1.length && j < nums2.length) {
            if(nums1[i] < nums2[j]) {
                merged.push(nums1[i]);
                i++;
            } else {
                merged.push(nums2[j]);
                j++;
            }
        }
        while(i < nums1.length) {
            merged.push(nums1[i]);
            i++;
        }
        while(j < nums2.length) {
            merged.push(nums2[j]);
            j++;
        }
    }  
  
    merge(nums1,nums2);
      // console.log(merged);
      if(merged.length % 2 === 0) {
         return (merged[merged.length/2] + merged[(merged.length/2) - 1])/2;
      } else {
          return merged[Math.floor(merged.length/2)];
      }
  };

/**
 * Binary Search
 * 
 * Time O(log(min(m,n))) | Space O(1);
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    if(nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
      }
  
      const total = nums1.length + nums2.length;
      const half = Math.floor((nums1.length + nums2.length)/2);
  
      let left = 0;
      let right = nums1.length;
      while(true) {
  
        const mid = Math.floor((left+right)/2);
        const leftFromHalf = half - mid - 2;
        
        let left1 = mid >= 0 ? nums1[mid] : -Infinity;
        let left2 = leftFromHalf >= 0 ? nums2[leftFromHalf] : -Infinity;
        let right1 = mid+1 < nums1.length ? nums1[mid+1] : Infinity;
        let right2 = leftFromHalf+1 < nums2.length ? nums2[leftFromHalf+1] : Infinity;
  
        if(left1 <= right2 && left2  <= right1) {
          if(total%2) {
            return Math.min(right1, right2);
          }
          return (Math.max(left1, left2) + Math.min(right1, right2))/2;
        } 
  
        if(left1 < left2) {
          left = mid + 1; 
        } else {
          right = mid - 1;
        }
      }
};