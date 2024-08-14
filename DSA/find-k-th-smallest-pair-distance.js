/**
 * Binary Search | Two Pointer | Counting
 * Time O(n*log(n)) | Space O(1)
 * https://leetcode.com/problems/find-k-th-smallest-pair-distance
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    
    nums = nums.sort((a,b) => a-b);

    const totalNumSmallerThanN = (num) => {

        let left = 0;
        let right = 1;
        let total = 0;

        while(right < nums.length) {
            while(nums[right] - nums[left] > num && left < right) left++;
            total += right-left;
            right++;
        }

        return total;
    }

    let left = 0;
    let right = nums[nums.length - 1];

    while(left < right) {
        const mid = left + Math.floor((right-left)/2);
        console.log(left,right,mid);
        const diffSmallerOrEqualToMid = totalNumSmallerThanN(mid);

        if(diffSmallerOrEqualToMid >= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return right;
};

/**
 * Brute Force | Sorting
 * Time O(n^2) | Space O(n^2)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair0 = function(nums, k) {
    
    const diffs = [];
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            diffs.push(Math.abs(nums[i]-nums[j]));
        }
    }

    return diffs.sort((a,b) => a-b)[k-1];
};