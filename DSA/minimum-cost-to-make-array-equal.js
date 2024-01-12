/**
 * 
 * Binary Search
 * https://leetcode.com/problems/minimum-cost-to-make-array-equal/
 * 
 * Time O(n*log(n)) | Space O(1)
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(nums, cost) {

    const getCost = (x) => {
        let minCost = 0;
        for(let i = 0; i < nums.length; i++) {
            minCost += Math.abs(x - nums[i]) * cost[i];
        }
        return minCost;
    }

    let left = Math.min(...nums);
    let right = Math.max(...nums);

    let answer = 0;
    while(left < right) {
        const mid = left + Math.floor((right - left)/2);

        const currCost = getCost(mid);
        const nextCost = getCost(mid+1);
        answer = Math.min(currCost, nextCost);
        if(currCost < nextCost) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return answer;
};
