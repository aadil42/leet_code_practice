/**
 * 
 * CountSort | hashing | frequency of elements
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    
    const frequencyArr = [];

    for(let i = 0; i < nums.length; i++) {
        const frequency = frequencyArr[nums[i]] || 0;
        frequencyArr[nums[i]] = frequency + 1;
    }

    let left = 0;
    let right = frequencyArr.length - 1;

    let max = 0;
    while(left <= right) {
        while(!frequencyArr[left] && left < frequencyArr.length) {
            left++;
        }
        while(!frequencyArr[right] && right > -1) {
            right--;
        }

        frequencyArr[right] -= 1;
        frequencyArr[left] -= 1;

        max = Math.max(max, left+right);
    }

    return max;
};

/**
 * Sorting
 * Time O(n*log(n)) | Space O(n) (because sorting might take n space)
 * https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/description
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum1 = function(nums) {
    
    nums.sort((a,b) => a-b);

    let left = 0;
    let right = nums.length - 1;

    let max = 0;
    while(left < right) {
        max = Math.max(nums[left] + nums[right], max);
        left++;
        right--;
    }

    return max;
};