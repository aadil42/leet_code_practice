/**
 * Sorting | Greedy | Array
 * Time O(n*log(n)) | Space O(1);
 * https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/
 * 
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    
    nums.sort((a,b) => a-b);

    let maxPolygon = -1;
    let currentTotal = nums[0] + nums[1];

    let i = 2;

    while(i < nums.length) {
        if(currentTotal > nums[i]) {
            maxPolygon = currentTotal + nums[i];
        }
        currentTotal += nums[i];
        i++;
    }

    return maxPolygon;
};