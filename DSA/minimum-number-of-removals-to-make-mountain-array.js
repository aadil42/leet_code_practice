/**
 * Brute Force | Backtracking
 * Time O((2^n) * (n)) | Space O(n)
 * https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array
 * @param {number[]} nums
 * @return {number}
 */

var minimumMountainRemovals = function(nums) {

    let max = 0;

    const dfs = (i, arr) => {
        if (i === nums.length) {
            if (isValid(arr)) {
                max = Math.max(max, arr.length);
            }
            return;
        }

        arr.push(nums[i]);
        dfs(i+1, arr);
        arr.pop();
        dfs(i+1, arr);
    }

    dfs(0,[]);

    return nums.length - max;
};

const isValid = (nums) => {

    if(nums.length < 3) return false;

    const maxIdx = getMaxIdx(nums);
    return isIncreasing(0, maxIdx, nums) && 
           isDecreasing(maxIdx, nums.length-1, nums) &&
           maxIdx > 0 &&
           maxIdx < nums.length - 1;
}

const isIncreasing = (start, end, arr) => {

    for (let i = start; i < end; i++) {
        const curr = arr[i];
        const next = arr[i + 1];
        if (next <= curr) return false;
    }

    return true;
}

const isDecreasing = (start, end, arr) => {

    for (let i = start; i < end; i++) {
        const curr = arr[i];
        const next = arr[i + 1];
        if (next >= curr) return false;
    }
    
    return true;
}

const getMaxIdx = (nums) => {
    let maxNum = 0;
    let maxIdx = 0;

    for (let i = 0; i < nums.length;  i++) {
        if (nums[i] > maxNum) {
            maxNum = nums[i];
            maxIdx = i;
        }
    }

    return maxIdx;
};