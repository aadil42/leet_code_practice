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

    let A = nums1;
    let B = nums2;
    if(nums1.length < nums2.length) {
        A = nums1;
        B = nums2;
    } else {
        B = nums1;
        A = nums2;
    }

    const total = nums1.length + nums2.length;
    const half = Math.floor(total/2);

    let left = 0;
    let right = A.length - 1;

    while(true) {
        let i = Math.floor(((right + left)/2));
        let j = half - i - 2;    

        let Aleft;
        let Bleft;  
        let Aright;
        let Bright;

        if(i >= 0) {
            Aleft = A[i];
        } else {
            Aleft = -Infinity
        }

        if(j >= 0) {
            Bleft = B[j];
        } else {
            Bleft = -Infinity
        }

        if(i+1 < A.length) {
            Aright = A[i+1];
        } else {
            Aright = Infinity;
        }

        if(j+1 < B.length) {
            Bright = B[j+1];
        } else {
            Bright = Infinity;
        }

        if(Aleft <= Bright && Bleft <= Aright) {
            if(total % 2) {
                return Math.min(Aright,Bright);
            }
            return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
        }

        if(Aleft > Bleft) {
            right = i-1;
        } else {
            left = i+1;
        }
    }
};