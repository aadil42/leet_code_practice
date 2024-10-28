/**
 * HashSet
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/longest-square-streak-in-an-array
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
    
    nums = new Set(nums);

    let i = 2;
    let max = 0;


    while(i <= 10**5) {
        let num = i;
        let len = 0;
        while(i <= 10**5) {
            if(!nums.has(num)) break;
            len++;
            num = num**2;
        }
        max = Math.max(max, len);
        i++;
    }

    return (max > 1 && max) || -1;
};
