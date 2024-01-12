/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * Binary Search
 * Time O(log(n)) | Space O(1)
 * https://leetcode.com/problems/find-in-mountain-array/
 * 
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    
    let n = mountainArr.length();
    const findPeak = () => {

      let left = 0;
      let right = n - 1;

      while(left <= right) {
        // console.log(left,right);
        const mid = left + Math.floor((right - left)/2);
        const midVal = mountainArr.get(mid);
        const midValLeft = mountainArr.get(mid-1) || -Infinity;
        const midValRight = mountainArr.get(mid+1) || -Infinity;

        // console.log(midValLeft, midVal, midValRight);
        if(midVal > midValLeft && midVal > midValRight) return mid;
        if(midVal > midValLeft) left = mid+1;
        if(midVal > midValRight) right = mid-1;
      }
    }

    const leftBinarySearch = (end) => {
      let left = 0;
      let right = end;

      while(left <= right) {

        const mid = left + Math.floor((right - left)/2);
        const val = mountainArr.get(mid);
        if(val === target) return mid;
        if(val < target) left = mid+1;
        if(val > target) right = mid-1;
      }

      return false;
    }

    const rightBinarySearch = (start) => {
      
      let left = n - 1;
      let right = start;

      while(right <= left) {

        const mid = right + Math.floor((left - right)/2);
        const val = mountainArr.get(mid);

        if(val === target) return mid;
        if(val < target) left = mid - 1;
        if(val > target) right = mid + 1;
      }

      return false;
    }


    const peakIndex = findPeak();
    if(mountainArr.get(peakIndex) === target) return peakIndex;

    const leftResult = leftBinarySearch(peakIndex-1);
    const rightresult = rightBinarySearch(peakIndex+1);
    
    if(leftResult !== false) return leftResult;
    if(rightresult !== false) return rightresult;
    return -1;
};