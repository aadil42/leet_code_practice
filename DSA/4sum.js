/**
 * If you've solved 3Sum then it's pretty simmiler and straight-forward.
 * Two Pointer | Sorting;
 * Time O(n^3) | Space O(1);
 * https://leetcode.com/problems/4sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {

    nums = nums.sort((a,b) => a-b);

    // this function is taken from threeSum porblem. 
    // we modified it little bit to make use of it for this problem.
    // the time complexity of this funciton is n^2
    var threeSum = function(start, target) {

    let i = start;
    const result = [];

    while(i < nums.length) {

        if(i > start && nums[i-1] === nums[i]) {
            i++;
            continue;
        };

        let left = i + 1;
        let right = nums.length - 1; 

        while(left < right) {
                if(nums[left] + nums[right] + nums[i] === target) {
                    result.push([nums[left], nums[right], nums[i]]);
                    left++
                    right--;
                    while(left < right && nums[left] === nums[left-1]) left++;
                    continue;
                } 
                if(nums[left] + nums[right] + nums[i] > target) {
                    right--;
                    continue;
                }
                if(nums[left] + nums[right] + nums[i] < target) {
                    left++;
                    continue;
                }
            }
            i++;
        }
        return result;
    };

    let i = 0;
    const result = [];

    while(i < nums.length) {

        if(i > 0 && nums[i-1] === nums[i]) {
            i++;
            continue;
        }

        const pairOf3 = threeSum(i+1, target - nums[i]);
        for(let  j = 0; j < pairOf3.length; j++) {
            result.push([nums[i], ...pairOf3[j]]);
        }
        i++;
    }

    return result;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum1 = function(nums, target) {
    nums = nums.sort((a,b) => a - b);

    const result = new Set();

    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            const remainingTarget = target - nums[i] - nums[j];
            find4Sum(j+1, [i,j] ,nums, remainingTarget, result);
        }
    }

    const uniquePair = [];
    for(element of result.values()) {
        uniquePair.push(element.split(','));
    }

    return uniquePair;
};

var find4Sum = function(left, indecis, nums, target, result) {
    const [i,j] = indecis;
    let right = nums.length - 1;

    while(left < right) {
        if(target < nums[left] + nums[right]) {
            right--;
        } else if(target > nums[left] + nums[right]) {
            left++;
        } else {
             const quad = [nums[i], nums[j], nums[left], nums[right]].join(',');
             result.add(quad);
             left++;
        }
    }

    return false;
}