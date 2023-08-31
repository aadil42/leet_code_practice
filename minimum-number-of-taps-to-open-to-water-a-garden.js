/**
 * Two Pointers
 * https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/
 * 
 * Time O(n*log(n)) | Space O(n);
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
    
    // filter out zeros
    ranges.filter((range) => {
        return range !== 0;
    });
    // make intervals
    for(let i = 0; i < ranges.length; i++) {
        const leftReach = i - ranges[i];
        const rightReach = i + ranges[i];
        ranges[i] = [leftReach, rightReach]; 
    }
    // sort based on left index
    ranges.sort((a,b)=>a[0]-b[0]);

    let left = 0;
    let right = 0;
    let index = 0;
    let tap = 0;

    while(index < ranges.length)  {
      while(index < ranges.length && ranges[index][0] <= left) {
        right  = Math.max(right, ranges[index][1]);
        index++;
      }
      tap++;
      if(right >= n) return tap;
      if(right === left) return -1;
      left = right;
    }
};

