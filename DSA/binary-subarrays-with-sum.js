/**
 * I don't get the solution 100%
 * It's a bit challanging. But, not that hard.
 * Two pointer
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/binary-subarrays-with-sum
 * 
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {

    const helper = (goal) => {

        if(goal === -1) return 0;

        let left = 0;
        let right = 0;
        let total = 0;
        let res = 0;
        while(right < nums.length) {
            total += nums[right];
            while(total > goal) {
                total -= nums[left];
                left++;
            }
            res += (right-left) + 1;
            right++;
        }
        return res;
    }

    return helper(goal) - helper(goal-1);
};