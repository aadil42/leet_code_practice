/**
 * Sorting | Math | Two Pointers
 * Time O(n*log(n)) | Space O(1)
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {

    const rev = (num) => {
        num = num.toString().split('').reverse().join('');
        return +num;
    }

    const gaussSum = (num) => {
        return (1 + num) * (num/2);
    }

    nums = nums.map((num) => {
        return num - rev(num);
    });

    nums.sort((a,b) => {
        return a-b;
    });

    let left = 0;
    let right = 0;

    let total = 0;
    const mod = 10**9 + 7;
    console.log(nums);

    while(right < nums.length + 1) {
        if(nums[right] === nums[left]) {
            right++;
            continue;
        }
        total =  (total+gaussSum(right-left-1)) % mod;
        left = right;
        right++;
    }

    return total;
};

/**
 * Brute Force
 * Time O(n^2) | Space O(1)
 * https://leetcode.com/problems/count-nice-pairs-in-an-array
 * 
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs1 = function(nums) {
    
    let total = 0;
    const mod = 10**9 + 7;

    const rev = (num) => {
        num = num.toString().split('').reverse().join('');
        return +num;
    }

    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] + rev(nums[j]) === nums[j] + rev(nums[i])) {
                total = (total + 1) % mod;
            } 
        }
    }

    return total;
};